import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    border-radius: 1rem;
    position: relative;
    
 

    input {
        width: 100%;
        height: 100px;
        background-color: #000;
        border: 0;
        padding: 0 15px;
        border-radius: 2rem;
        font-size: 36px;
        color: red;
    }

    &::after {
            content: "";
            position: absolute;
            border: 2px solid #E41050;
            top: +5px;
            left: +5px;
            width: 97%;
            height: 87%;
            border-radius: 22px;
        }
`;