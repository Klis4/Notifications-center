import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table.js';
import Pagination_Bar from './components/Pagination.js'
import Mark_All_As_Read from './components/MarkAllAsRead.js'
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import StorageOfColors from './css_resources/colors';


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

const Warning_Message = styled.div`
    width: 50vw;
    height: 50vh;

    position: absolute;
    top: 25vh;
    left: 25vw;
    
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${color.get('Default_Text')};    
`;

class NotificationsCenter extends React.Component {
    render() {
        return(
            <React.Fragment>
                <GlobalStyle />
                <Table />
                <Pagination_Bar />
                <Mark_All_As_Read />
                <Warning_Message>No notifications found :)</Warning_Message>
            </React.Fragment>
            
        );
    }
}

ReactDOM.render(<NotificationsCenter />, document.getElementById('root'));