import React from 'react';
import { StyledMovieItem } from './MovieItem.style';
import imageNotFound from 'assets/img/image-not-found.png';
const MovieItem = ({ item }) => {
    return (
        <StyledMovieItem key={item.id}>
            {item.primaryImage && item.primaryImage.url ? (
                <img alt={item.titleText.text} src={item.primaryImage.url} />
            ) : (
                <img alt="Not found" src={imageNotFound} />
            )}
            <div>
                {item.titleText && item.titleText.text ? <h3>{item.titleText.text}</h3> : ''}
                <p>
                    Release date: <br />
                    {item.releaseDate ? `${item.releaseDate.day}-${item.releaseDate.month}-${item.releaseDate.year}` : 'No data'}
                </p>
                {item.id ? <p>{`IMDB ID: ${item.id}`}</p> : ''}
            </div>
        </StyledMovieItem>
    );
};

export default MovieItem;
