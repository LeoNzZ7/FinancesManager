import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
`;

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #555;
    margin-bottom: 5px;
`;

export const Info = styled.div<{color?: string}>`
    text-align: left;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${props => props.color ?? '#000'}
`;