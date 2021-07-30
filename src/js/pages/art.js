import artService from '../services/artService';
import Handlebars from 'handlebars';

class Art {
	namespace = 'art';

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
    };

    registerEvents(container) {
        var toogleZoomElements = container.getElementsByClassName("toggle-zoom");

        for (let i = 0; toogleZoomElements.length; i++) {
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
}

export default new Art();
