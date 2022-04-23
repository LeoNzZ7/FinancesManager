import styled from 'styled-components'

export const Container = styled.div<{theme: string}>`
    background-color:  ${props => props.theme.status === 'light' ? '#0089ff' : '#000'};
    height: 100%;
    padding-bottom: 57px;
`;

export const Header = styled.div<{theme: string}>`
    background-color:  ${props => props.theme.status === 'light' ? '#0089ff' : '#000'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 170px
`;

export const HeaderArea = styled.div`
    margin: auto;
    max-width: 980px;
    display: flex;
    align-items: start;
    justify-content: center;
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    height: 65%;
    padding-bottom: 30px;
    text-align: start;
    margin-bottom: 10px;
    margin-left: 330px;
    margin-right: 290px;
`;

export const Body = styled.div`
    max-width: 980px;
    margin: auto;
    margin-bottom: 50px;
`;



