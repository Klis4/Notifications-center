import React from 'react';
import styled from 'styled-components';
import StorageOfColors from '../css_resources/colors'

const color = new StorageOfColors();

const Mark_All_As_Read_Button = styled.button`
    height: 2em;
    position: absolute;
    bottom: 0px;

    width: 100vw;
    height: 2.5em;

    font-size: 1.2em;
    
    color: white;
    background-color: ${color.get('Light_Blue')};
    border: none;

    :hover {
        background-color: ${color.get('Light_Blue_Hovered')};
    }
`;

class MarkAllAsRead extends React.Component {
    render() {
        return (
            <Mark_All_As_Read_Button>MARK ALL AS READ</Mark_All_As_Read_Button>
        );
    }
}

export default MarkAllAsRead;