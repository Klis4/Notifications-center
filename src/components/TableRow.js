import React from 'react';
import styled from 'styled-components';
import StorageOfColors from '../css_resources/colors';

const color = new StorageOfColors();

const Table_Row = styled.tr`
    width: 100vw;
    
    display: flex;
    
    
`;

const Color = styled.td`
    background-color: ${
        props => color.get(props.inputColor) || color.get('Table_Background')
    };

    width: 0.5vw;
`;
const Category = styled.td`
    padding-left: 1em;
    padding-top: 0.5em;
    width: 19.5vw;

    
`;
const Message = styled.td`
    width: 50vw;
    padding-top: 0.5em;

`;
const Date = styled.td`
    width: 30vw;
    padding-top: 0.5em;

`;

class TableRow extends React.Component {
    render() {
        return (
            <Table_Row>
                <Color inputColor="Light_Blue"/>
                <Category>INFO</Category>
                <Message id='Message'>The first notification</Message>
                <Date>08.12.20</Date>
            </Table_Row>
        );
    }
}

export default TableRow;