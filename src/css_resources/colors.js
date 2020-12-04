class StorageOfColors {
    constructor() {
        this.color = {
            Table_Background: '#d1cdcd'
        };
    }

    get(name_of_color) {
        return this.color[name_of_color];
    }
}

export default StorageOfColors;