import artService from '../services/artService';
import Handlebars from 'handlebars';

class Art {
	namespace = 'art';

	beforeEnter = data => {
        this.registerHandlebarsHelpers();
        let art = this.getArt();
        this.renderTemplate(data.next.container, art);
    };

    registerHandlebarsHelpers() {

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
