import artService from '../services/artService';
import artCategories from '../data/artCategories';
import Handlebars from 'handlebars';

class Gallery {
	namespace = 'gallery';

	beforeEnter = data => {
        var artItems = artService.listByCategory(artCategories.illustrations);

        Handlebars.registerHelper('segment', function (items, column, columnCount) {
            return items.filter((x, index) => index % columnCount === column);
        })

        Handlebars.registerHelper("repeat", function(times, options) {
            var result = "";
            for(var i = 0; i < times; i++){
                var context = Object.assign({ "$iteration": i }, options.data.root);
                result += options.fn(context);
            }
            return result;
        });



        var template = Handlebars.compile(data.next.container.innerHTML);
        var html = template({ artItems });
        data.next.container.innerHTML = html;
    };
}

export default new Gallery();
