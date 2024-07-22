import styled from 'styled-components';

export const StyledInput = styled.input`
    margin-bottom: 4rem;
    background: #0e0e0e;
    border: 0.0625rem solid #212429;
    border-radius: 0.1rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    height: 100%;
    padding: 1.5rem;
    width: 100%;
    &::placeholder {
        color: ${({ theme }) => theme.colors.white};
    }
`;
