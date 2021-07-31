import artService from '../services/artService';
import Handlebars from 'handlebars';
import Swiper from 'swiper';

class Art {
	namespace = 'art';
    swiper = null;

	beforeEnter = data => {

        let art = this.loadArt();
        let previousId = artService.getPrevious(art.id)?.id;
        let nextId = artService.getNext(art.id)?.id;

        let model = {
            art: art,
            gallery: art.category,
            nextHidden: !nextId,
            nextId: nextId,
            previousHidden: !previousId,
            previousId: previousId
        };
        this.renderTemplate(data.next.container, model);
        this.registerEvents(data.next.container);
        this.initSwiper();
    };

    registerEvents(container) {
        var toogleZoomElements = container.getElementsByClassName("toggle-zoom");

        for (let i = 0; i < toogleZoomElements.length; i++) {
            let element = toogleZoomElements[i];
            element.addEventListener("click", ev => {
                var detailView = container.getElementsByClassName("detail-view")[0];
                var fullSizeView = container.getElementsByClassName("full-size-view")[0];
                detailView.classList.toggle("d-none");
                fullSizeView.classList.toggle("d-none");
            });
            element.addEventListener("contextmenu", function(e){
                e.preventDefault();
            }, false);
        }
    }

    loadArt() {
        let urlParams = new URLSearchParams(window.location.search);
        let artId = parseInt(urlParams.get("id"));
        if(!artId){
            artId = 1;
        }

        let art = artService.get(artId);
        if(!art) {
            return artService.get(1);
        }

        return art;
    }
    renderTemplate(container, model) {
        let template = Handlebars.compile(container.innerHTML);
        let html = template(model);
        container.innerHTML = html;
    }
    initSwiper(){
        this.swiper = new Swiper('.swiper-container', {
            zoom: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            on: {
                zoomChange: (swiper, scale) => this.onZoomChanged(swiper, scale)
            }
        });
    }

    onZoomChanged(swiper, scale){
        swiper.allowSlideNext = scale === 1;
        swiper.allowSlidePrev = scale === 1;
        swiper.allowTouchMove = scale === 1;
    }
}

export default new Art();
