import artCollection from '../data/artCollection'

class ArtService {

    get(id) {
        return artCollection.find(a => a.id === id);
    }

    listByCategory(category) {
        return artCollection.filter(a => a.category === category);
    }
}

export default new ArtService()
