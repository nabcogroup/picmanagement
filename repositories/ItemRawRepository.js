

const ItemRaw = require('../models/ItemRaw');


class ItemRawRepository {

    constructor() {
        
        this.items = [
            new ItemRaw('123454','Dining Set ')
        ];
    }

    addItems(item) {
        
        this.items.push(item);
    }

    all() {
        return this.items;
    }

}

module.exports = ItemRawRepository;