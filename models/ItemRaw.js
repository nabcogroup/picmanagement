
class ItemRaw {
   

    constructor(code ='',description = '') {
        
        this.code = code;
        this.description = description;

    }

    setPath(path) {
        this.filePath = path;
    }

    
}

module.exports = ItemRaw;