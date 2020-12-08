import React from 'react';
import styled from 'styled-components';
import StorageOfColors from '../css_resources/colors';

const color = new StorageOfColors();

const Pagination_Bar = styled.div`
    width: 100vw;

    position: absolute;
    bottom: 2.5em;

    display: flex;
    justify-content: center;

    color: ${color.get('Default_Text_Dark')};
    font-size: 1.2em;
`;
const Pagination_Element = styled.span`

`;

class Pagination extends React.Component {
    render() {
        return (
            <Pagination_Bar>
              <Pagination_Element>&#60;</Pagination_Element>
              <Pagination_Element id='Pagination_content'>...</Pagination_Element>
              <Pagination_Element>&#62;</Pagination_Element>
            </Pagination_Bar>
        ); 
    }
}

export default Pagination;