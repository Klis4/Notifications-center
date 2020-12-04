import React from 'react';
import styled from 'styled-components';
import StorageOfColors from '../css_resources/colors'

const color = new StorageOfColors(); 
 
const Notifications_Table = styled.table`
    width: 100%;
    height: 100%;
    background-color: ${color.get('Table_Background')};
`;


class Table extends React.Component {
    render () {
        return (
            <Notifications_Table>
lallalalalalal
            </Notifications_Table>
        );
    }
}

export default Table;