import anime from 'animejs/lib/anime.es.js';

class DefaultTransition {

    constructor() {
        this.name = 'default-transition';
    }

    once(data) {
        this.enterTransition(data);
    }

    leave(data) {
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

        var contentAnimation = anime({
            targets: data.current.container,
            opacity: 0,
            duration: 500,
            easing: 'linear'
        });

        return Promise.all([
            leftAnimation.finished,
            rightAnimation.finished,
            contentAnimation.finished
        ]);
    }

    beforeEnter(data) {
        data.current.container.style.display = "none";
    }

    enter(data) {
        this.enterTransition(data);
    }

    enterTransition(data) {

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

  }

export default new DefaultTransition();
