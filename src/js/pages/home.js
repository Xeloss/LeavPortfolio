import Handlebars from 'handlebars';

class Home {
    namespace = 'home';

    beforeEnter = data => {

        let characterPair = this.getCharacterPairNumber();

        this.renderTemplate(data.next.container, { left: characterPair, right: characterPair });
    };

    renderTemplate(container, vm) {
        let template = Handlebars.compile(container.innerHTML);
        let html = template(vm);
        container.innerHTML = html;
    }

    getCharacterPairNumber() {
        let storeKey = "home-character-last-pair";
        let pairNumber = window.localStorage.getItem(storeKey);

        if(!pairNumber) {
            pairNumber = (Math.random() * 10).toFixed(0) % 2;
        }

        pairNumber++;
        if(pairNumber >= 2){
            pairNumber = 0;
        }

        window.localStorage.setItem(storeKey, pairNumber);
        return pairNumber;
    }
}

export default new Home();
