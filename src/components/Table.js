import React from 'react';
import styled from 'styled-components';
import StorageOfColors from '../css_resources/colors'
import TableRow from './TableRow';
import HTTP from '../service/httpRequest';

const color = new StorageOfColors(); 
const http = new HTTP();
//styled elements
const Notifications_Table = styled.table`
    width: 100vw;
    height: 90vh;
    background-color: ${color.get('Table_Background')};

    border-spacing: 0;
   
`;
const Table_Body = styled.tbody`

`;

const Table_Header_tr = styled.tr`
    height: 2em;    
`;
const Table_Header = styled.td`
    left: 0px;
    top: 0px;

    width: 100vw;
    height: 2em;
    
    background: ${color.get('Table_Header_Background')};
`;
const Header_Text = styled.span`
    font-size: 1.1em;
    color: ${color.get('Table_Header_Text')};

    padding-left: 1em;

`;

const Navigation_Bar = styled.tr`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 2em;

    align-items: center;

    font-size: 1.1em;

    border-bottom: 1px solid LightGrey;
    color: ${color.get('Default_Text')};
`;
const Category_Tab = styled.td`
    width: 20vw;
    padding-left: 1em;

    ::before {
        content: '...';
        font-size: 1.1em;

        position: absolute;
        top:  2.5em;
    };

    :hover {
        color: ${color.get('Light_Blue')};
    }
`;
const Message_Tab = styled.td`
    padding: 0;
    width: 50vw; 
`;
const Date_Tab = styled.td`
    padding 0;
    width: 30vw;
`;

function displayNotifications () {
    http.get('1', 2, 'desc');
}

class Table extends React.Component {
    render () {
        return (
            <Notifications_Table>
                <thead>
                    <Table_Header_tr>
                        <Table_Header>
                            <Header_Text>Notifications center</Header_Text>
                        </Table_Header>
                    </Table_Header_tr>
                    <Navigation_Bar>
                        <Category_Tab>
                            Category
                        </Category_Tab>

                        <Message_Tab>
                            Message
                        </Message_Tab>

                        <Date_Tab>
                            Date
                        </Date_Tab>
                    </Navigation_Bar>
                </thead>
                <Table_Body>
                    <TableRow />
                </Table_Body>
            </Notifications_Table>

            
        );
    }
}

export default Table;