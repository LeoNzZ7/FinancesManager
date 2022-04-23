import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 15px;
    margin-top: 20px;
`;

export const Table = styled.table`
    width: 100%;    
`;

export const TableHeadColumn = styled.th<{ width?: number}>`
    padding: 10px 0px;
    text-align: left;
    width: ${props => props.width ? `${props.width}px` : 'auto' };
`;

export const SearchArea = styled.div`
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

        ::placeholder {
            color: #000;
        }
    }

    select {
        border: 1px solid #ccc;
        width: 30%;
        height: auto;
        padding: 10px
        outline: 0;
        border-radius: 0px 15px 15px 0px;
    };

    .option {
        background-color: #fff;
    }

`;