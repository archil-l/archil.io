import React from 'react';
import styled from 'styled-components';

export const LinkContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const LogoWrapper = styled.li`
    margin: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    svg {
        width: 32px;
        height: 32px;
        margin: 8px;
    }
`;

