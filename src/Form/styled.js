import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    letter-spacing: 1px;

    @media (max-width: 767px){
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    padding: 10px;
    background-color: teal;
    color: white;
    border: none;
    transition: 0.5s;

    &:hover{
        transform: scale(1.1);
        opacity: 80%;
        cursor: pointer;
    }
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    padding: 10px;
`;