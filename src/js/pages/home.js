import Handlebars from 'handlebars';

class Home {
    namespace = 'home';

    beforeEnter = data => {

        var leftCharacter = (Math.random() * 7).toFixed(0) % 2;
        var rightCharacter = (Math.random() * 11).toFixed(0) % 2;

        this.renderTemplate(data.next.container, { left: leftCharacter, right: rightCharacter });
        this.registerEvents();
    };

    renderTemplate(container, vm) {
        let template = Handlebars.compile(container.innerHTML);
        let html = template(vm);
        container.innerHTML = html;
    }
}

export default new Home();
