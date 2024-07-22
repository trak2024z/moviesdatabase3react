// sharedStyles.js
import styled, { css } from 'styled-components';

export const ButtonStyles = css`
    cursor: pointer;
    padding: 0.8rem 1.6rem;
    font-size: 1.6rem;
    line-height: 2.3rem;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    outline: none;
    font-weight: 700;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    background-color: rgb(238, 238, 238);

    &.primary {
        background-color: rgb(236, 54, 85);
        color: ${({ theme }) => theme.colors.white};
        border: 0.1rem solid transparent;
        margin-bottom: 2rem;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
export const StyledButton = styled.button`
    ${ButtonStyles}
`;
