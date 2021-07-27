import artService from '../services/artService';
import Handlebars from 'handlebars';

class Art {
	namespace = 'art';

	beforeEnter = data => {

        let art = this.getArt();
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
        this.registerEvents();
    };

    registerEvents() {
        // var element = document.getElementsByClassName("toggle-zoom")[0];
        // element.addEventListener("click", ev => {
        //     ev.target.classList.toggle("full-size");
        // });
        // element.addEventListener("contextmenu", function(e){
        //     e.preventDefault();
        // }, false);
    }

    getArt() {
        let urlParams = new URLSearchParams(window.location.search);
        let artId = parseInt(urlParams.get("id"));
        if(!artId)
            artId = 1;

        return artService.get(artId);
    }
    renderTemplate(container, model) {
        let template = Handlebars.compile(container.innerHTML);
        let html = template(model);
        container.innerHTML = html;
    }
}

export default new Art();
