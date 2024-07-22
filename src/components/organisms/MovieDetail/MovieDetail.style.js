import styled from 'styled-components';

export const StyledMovieDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 2rem;

    img {
        max-width: 20rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column;
    }
`;
