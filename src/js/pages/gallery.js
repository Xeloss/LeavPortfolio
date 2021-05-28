import artService from '../services/artService';
import artCategories from '../data/artCategories';
import Handlebars from 'handlebars';

class Gallery {
	namespace = 'gallery';

	beforeEnter = data => {
        this.registerHandlebarsHelpers();

        let category = this.getCategory();
        let artItems = artService.listByCategory(category);
        this.renderTemplate(data.next.container, category, artItems);
    };

    registerHandlebarsHelpers() {
        Handlebars.registerHelper('segment', function (items, column, columnCount) {
            return items.filter((x, index) => index % columnCount === column);
        })

        Handlebars.registerHelper("repeat", function(times, options) {
            let result = "";
            for(let i = 0; i < times; i++){
                let context = Object.assign({ "$iteration": i }, options.data.root);
                result += options.fn(context);
            }
            return result;
        });
    }
    getCategory() {
        let urlParams = new URLSearchParams(window.location.search);
        let category = urlParams.get("category") ?? artCategories.illustrations;
        if(!artService.isValidCategory(category)){
            category = artCategories.illustrations;
        }

        return category;
    }
    renderTemplate(container, category, artItems) {
        let template = Handlebars.compile(container.innerHTML);
        let html = template({ category, artItems });
        container.innerHTML = html;
    }
}

export default new Gallery();
