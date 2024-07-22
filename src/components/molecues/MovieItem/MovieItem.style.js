import styled from 'styled-components';

export const StyledMovieItem = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-self: stretch;
    height: auto;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: auto;
        border-radius: 1.2rem;
        overflow: hidden;
        transition: transform 0.3s;
    }
    &:hover {
        img {
            transform: rotate(3deg) scale(1.1);
        }
    }
`;
