import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table.js';
import Pagination_Bar from './components/Pagination.js';
import Mark_All_As_Read from './components/MarkAllAsRead.js';
import Warning_Message from './components/WarningMessage.js';
import { createGlobalStyle } from 'styled-components';
import StorageOfColors from './css_resources/colors';

import HTTP from './service/httpRequest';
const http = new HTTP(); 


const color = new StorageOfColors();

const GlobalStyle = createGlobalStyle`
    body {
        width: 100vw;
        height: 100vh;

        margin: 0;
        position: relative;
        box-sizing: border-box;
    }
`;

class NotificationsCenter extends React.Component {
    render() {
        return(
            <React.Fragment>
                <GlobalStyle />
                <Table />
                <Pagination_Bar />
                <Mark_All_As_Read />
                <Warning_Message />
            </React.Fragment>
            
        );
    }
}

function displayNotifications () {
    http.get('1', 2, 'desc');
}
const onloaded = () =>  {document.body.onload(displayNotifications)};


ReactDOM.render(<NotificationsCenter onLoad='displayNotifications'/>, document.getElementById('root'));