import anime from 'animejs/lib/anime.es.js';

class DefaultTransition {

    constructor() {
        this.name = 'default-transition';
    }

    once(data) {
        this.animateDecoration(data);
        this.animateCharactersOnEnter(data, true);
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
        this.animateDecoration(data);
    }

    enter(data) {
        this.animateCharactersOnEnter(data, true);
        anime({
            targets: data.next.container,
            opacity: 0,
            duration: 500,
            easing: 'linear',
            direction: 'reverse'
        });
    }

    animateCharactersOnEnter(data, isEntering) {

        var direction = isEntering ? 'reverse' : 'normal';
        var left = data.next.container.getElementsByClassName("fade-in left");
        var right = data.next.container.getElementsByClassName("fade-in right");

        var leftAnimation = anime({
            targets: left,
            opacity: 0,
            translateX: '30%',
            direction: direction,
            easing: 'easeInCirc'
        });
        var rightAnimation = anime ({
            targets: right,
            opacity: 0,
            translateX: '-30%',
            direction: direction,
            easing: 'easeInCirc'
        });

        return Promise.all([
            leftAnimation.finished,
            rightAnimation.finished
        ]);
    }

    animateDecoration(data) {
        var decorations = data.next.container.getElementsByClassName("decoration");
        for(let i = 0; i < decorations.length; i++){
            decorations[i].style.opacity = 0;
        }

        anime({
            targets: decorations,
            opacity: 1,
            duration: 3000,
            complete: (anim) => {
                anime({
                    targets: decorations,
                    translateY: 50,
                    direction: 'alternate',
                    loop: true,
                    easing: 'easeInOutSine',
                    duration: 5000,
                    delay: anime.stagger(500, {from: 'center', start: 0}),
                    autoplay: true
                });
            }
        });
    }
  }

export default new DefaultTransition();
