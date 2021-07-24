import artCollection from '../data/artCollection';
import artCategories from '../data/artCategories';

class ArtService {

    get(id) {
        return artCollection.find(a => a.id === id);
    }

    listByCategory(category) {
        return artCollection.filter(a => a.category === category);
    }

    isValidCategory(category) {
        return Object.entries(artCategories).some(kp => kp[1] === category);
    }

    getNext(id)
    {
        let item = this.get(id);
        let artsInCategory = artCollection.filter(a => a.category === item.category);
        let nextIndex = artsInCategory.indexOf(item) + 1;
        return artsInCategory[nextIndex] || null;
    }

    getPrevious(id)
    {
        let item = this.get(id);
        let artsInCategory = artCollection.filter(a => a.category === item.category);
        let nextIndex = artsInCategory.indexOf(item) - 1;
        return artsInCategory[nextIndex] || null;
    }
}

export default new ArtService()
