import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 15px;
    margin-top: -40px;
    padding: 20px;
    align-items: center;
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

export const MonthArrow = styled.div`
    font-size: 25px;
    cursor: pointer;
    width: 40px;
    text-align: center
`

export const MonthTitle = styled.h3`
    flex: 1;
    text-align: center;
`

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
`