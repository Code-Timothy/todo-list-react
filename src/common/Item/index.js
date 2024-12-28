import styled, { css } from "styled-components";

const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.alto};
    word-break: break-word;

    ${({ singleButton }) => singleButton && css`
        grid-template-columns: 1fr auto auto;
        justify-content: space-between;

        @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
            grid-template-columns: 1fr 80px auto;
            gap: 5px;
            font-size: 14px;
        }

        @media (max-width:${({ theme }) => theme.breakpoints.smallMobile}px){
            grid-template-columns: 1fr 70px auto;
            font-size: 12px;
        }
    `}

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export default Item;