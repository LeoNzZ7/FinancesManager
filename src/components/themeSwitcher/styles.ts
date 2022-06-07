import styled from "styled-components";

export const ThemeSwitcher = styled.div<{theme: string}>`
    display: flex;
    align-items: center;
    width: 60px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 15px;
    cursor: pointer;
    transition: background 0.25s;
    padding: 2px;
    background-color: ${props => props.theme.status === 'light' ? '#0089ff' : '#fff'};
    margin-top: 5px;
`;

export const HandleThemeSwitcher = styled.div<{theme: string}>`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${props => props.theme.status === 'light' ?  '#fff' : '#0089ff'};
    transition: all ease 0.35s;
    transform: translateX(${props => props.theme.status === 'light' ? '0px' : '35px'});
`;