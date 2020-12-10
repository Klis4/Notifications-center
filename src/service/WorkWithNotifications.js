import HTTP from './httpRequest';
import ReactDOM from 'react-dom';


const http = new HTTP();


class Notifications {
    constructor () {
        this.perPage = 9;
        this.sortOrder = 'desc';
    }

    get(page) {
        return http.get(page, this.perPage, this.sortOrder);
    }
    

}

export default Notifications;