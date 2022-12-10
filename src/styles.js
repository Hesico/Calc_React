import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #2C2C32;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 50vh;
    max-width: 90vw;

    background-color: #2C2C32;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;