import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 15px;
    margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{ width?: number}>`
    padding: 10px 0px;
    text-align: left;
    width: ${props => props.width ? `${props.width}px` : 'auto' };
`