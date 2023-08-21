import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    padding: 20px;
    grid-template-columns: 1fr 150px;
    gap: 20px;

    @media(max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

export const StyledInput = styled.input`
    padding: 10px;
    border: 2px #eee solid;

    &::placeholder{
        color: #aaa;
    }
`;

export const StyledButton = styled.button`
    background-color: teal;
    color: white;
    padding: 5px;
    border: none;
    letter-spacing: 1px;
    transition: 1s;

    @media(max-width: 768px){
        padding: 10px;
    }

    &:hover{
        background-color: hsl(180, 100%, 30%);
        cursor: pointer;
        transform: scale(1.1);
    }
`;