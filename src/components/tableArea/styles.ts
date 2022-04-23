import styled from "styled-components";

export const Container = styled.div<{theme: string}>`
    width: auto;
    background-color: ${props => props.theme.status === 'light' ? '#fff' : '#000'};
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 15px;
    margin-top: 20px;
    color:  ${props => props.theme.status === 'light' ? '#000' : '#fff'};
`;

export const Table = styled.table`
    width: 100%;    
`;

export const TableHeadColumn = styled.th<{ width?: number}>`
    padding: 10px 0px;
    text-align: left;
    width: ${props => props.width ? `${props.width}px` : 'auto' };
`;

export const SearchArea = styled.div<{theme: string}>`
    padding: 20px;
    display: flex;
    justify-content: start;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 15px;
    margin-bottom: 10px;

    input {
        width: 100%;
        height: auto;
        padding: 10px;
        outline: 0;
        border: 1px solid #ccc;
        border-radius: 15px 0px 0px 15px;
        border-right: 0;
        background-color: transparent;
        ${props => props.theme.status === 'light' ? '#000' : '#fff'}

        ::placeholder {
            color: ${props => props.theme.status === 'light' ? '#000' : '#fff'};
        }
    }

    select {
        border: 1px solid #ccc;
        width: 30%;
        height: auto;
        padding: 10px
        outline: 0;
        border-radius: 0px 15px 15px 0px;
        background-color: transparent;
        color: ${props => props.theme.status === 'light' ? '#000' : '#fff'};
    };

    .option {
        background-color: ${props => props.theme.status === 'light' ? '#fff' : '#000'};
        color: ${props => props.theme.status === 'light' ? '#000' : '#fff'};
    }

`;