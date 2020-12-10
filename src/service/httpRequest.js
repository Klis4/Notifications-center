import axios from 'axios';

class HTTP {
    constructor () {
        this.adress = 'http://localhost:3000/api/v1/notifications'
    }

    get (pageNumber, perPage, sortOrder) {
        const la = () => {axios.get (this.adress, {
            params: {
                page: pageNumber,
                perPage: perPage,
                sortOrder: sortOrder
            }
        })
        .then (function (response) {
            console.log("response");
        })
        .catch (function (error) {
            console.log("error");
        })
        .then (function(all){
            console.log("anyway")
        })
    }
    }

}

export default HTTP;