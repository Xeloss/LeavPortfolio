import artService from '../services/artService';
import Handlebars from 'handlebars';

class Art {
	namespace = 'art';

	beforeEnter = data => {
        let art = this.getArt();
        this.renderTemplate(data.next.container, art);
        this.registerEvents();
    };

    registerEvents() {
        var element = document.getElementById("art-img");
        element.addEventListener("click", ev => {
            ev.target.classList.toggle("full-size");
        })
    }

    getArt() {
        let urlParams = new URLSearchParams(window.location.search);
        let artId = parseInt(urlParams.get("id"));
        return artService.get(artId);
    }
    renderTemplate(container, art) {
        let template = Handlebars.compile(container.innerHTML);
        let html = template(art);
        container.innerHTML = html;
    }
}

export default new Art();
