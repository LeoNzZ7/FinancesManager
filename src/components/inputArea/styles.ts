import styled from "styled-components"

export const Container = styled.div`
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    background-color: #fff;
    border-radius: 15px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: center;

    input {
        width: 100%;
        height: auto;
        padding: 10px;
        border-right: 0;
        border-left: 0;
        outline: 0;

        ::placeholder {
            color: #000;
        }
    };

    .inputText {
        border: 1px solid #ccc;
        border-radius: 15px 0px 0px 15px;
        border-right: 0;
    };

    .inputNumber {
        border: 1px solid #ccc;
        width: 30%;
        border-right: 0;
    }

    .inputDate {
        border: 1px solid #ccc;
        width: 30%;
        border-right: 0;
    }

    select {
        border: 1px solid #ccc;
        width: 30%;
        height: auto;
        padding: 10px
        outline: 0;
        border-right: 0;
    };

    .option {
        background-color: #000;
    }

    button {
        width: 30%;
        height: auto;
        padding: 10px;
        color: #fff;
        border: 1px solid #aaa;
        border-left 0;
        border-radius: 0px 15px 15px 0px;
        font-weight: bold;
        background-color: #0089ff;
        outline: 0;
        cursor: pointer;

        &:hover {
            background-color: #0078ee;
        }
    }
`