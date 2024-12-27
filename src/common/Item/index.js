import styled, { css } from "styled-components";

const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.alto};
    word-break: break-word;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export default Item;