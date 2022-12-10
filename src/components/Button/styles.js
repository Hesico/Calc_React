import styled, {css} from "styled-components";

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #b5b5b5;
    background-color: #000;
    color: #FFF;
    font-size: 36px;
    font-weight: 700;
    height: 11vh;
    width: 22%;
    margin-bottom: 10px;
    position: relative;
    box-shadow: -4px 8px 10px #C32C2C;
    color: #C32C2C;
    border-radius: 0.5rem;

    &:hover{
        filter: brightness(1.5);
        box-shadow: -4px 5px 2px #C32C2C;
    }
    
    ${({size}) => size === "M" && css`
        width: 47%;
        height: 10vh;
    `}

`;