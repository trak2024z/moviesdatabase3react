import styled from 'styled-components';

export const StyledResultsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        grid-template-columns: 1fr 1fr;
    }
`;
