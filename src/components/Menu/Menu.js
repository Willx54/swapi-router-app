import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    background-color: #ccc;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200px;
`;

const Menu = props => {
    console.log('props: ', props);
    return (
        <Nav>
            <ul>
                {props.moduleTitles && props.moduleTitles.map((item, index) => {
                    console.log('item: ', item)
                    return (
                        <li key={index}>
                            <Link to="/characters">{item}</Link>
                        </li>
                    ) 
                })}
            </ul>
        </Nav>
    );
};

export default Menu;