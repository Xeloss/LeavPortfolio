import '../css/app.scss';
import barba from '@barba/core';
import Home from './pages/home';
import Gallery from './pages/gallery';
import anime from 'animejs/lib/anime.es.js';

barba.init({
	views: [
		Home,
		Gallery
    ],
    transitions: [{
        name: 'default-transition',
        leave: (data) => {
            var left = data.current.container.getElementsByClassName("fade-in left");
            var right = data.current.container.getElementsByClassName("fade-in right");

            var leftAnimation = anime({
                targets: left,
                opacity: 0,
                translateX: '-30%',
                duration: 500,
                easing: 'easeInCirc'
            });
            var rightAnimation = anime ({
                targets: right,
                opacity: 0,
                translateX: '30%',
                duration: 500,
                easing: 'easeInCirc'
            });

            var titleAnimation = anime({
                targets: data.current.container,
                opacity: 0,
                duration: 500,
                easing: 'linear'
            });

            return Promise.all([
                leftAnimation.finished,
                rightAnimation.finished,
                titleAnimation.finished
            ]);
        },
        beforeEnter: (data) => {
            data.current.container.style.display = "none";
        },
        afterEnter: (data) => {

            var left = data.next.container.getElementsByClassName("fade-in left");
            var right = data.next.container.getElementsByClassName("fade-in right");

            var leftAnimation = anime({
                targets: left,
                opacity: 0,
                translateX: '30%',
                direction: 'reverse',
                easing: 'easeInCirc'
            });
            var rightAnimation = anime ({
                targets: right,
                opacity: 0,
                translateX: '-30%',
                direction: 'reverse',
                easing: 'easeInCirc'
            });

            return Promise.all([
                leftAnimation.finished,
                rightAnimation.finished
            ]);
        }
      }]
});
