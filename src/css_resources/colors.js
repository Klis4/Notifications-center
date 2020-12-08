class StorageOfColors {
    constructor() {
        this.color = {
            Table_Background: '#FFFFFF',
            Table_Header_Background: '#4174F7',
            Table_Header_Text: '#ffffff',
            Default_Text: '#999999',
            Default_Text_Dark: '#666666',
            Light_Blue:'#51A8E7',
            Light_Blue_Hovered: '#11A8E7'
        };
    }

    get(name_of_color) {
        return this.color[name_of_color];
    }
}

export default StorageOfColors;