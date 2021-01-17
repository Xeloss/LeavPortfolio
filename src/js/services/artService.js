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
}

export default new ArtService()
