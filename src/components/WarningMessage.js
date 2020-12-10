import React from 'react';
import styled from 'styled-components';
import StorageOfColors from '../css_resources/colors';

const color = new StorageOfColors();

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

class WarningMessage extends React.Component {
    render () {
        return (
            <Warning_Message>No notifications found :)</Warning_Message>
        );
    }
}

export default WarningMessage;