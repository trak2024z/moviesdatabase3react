import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StyledMovieDetail } from './MovieDetail.style';
import Button from 'components/atoms/Button/Button';
import Loader from 'components/atoms/Loader/Loader';
import { fetchMovieDetails, fetchMovieRatings } from 'api/api';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [ratings, setRatings] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            const movieDetails = await fetchMovieDetails(id);
            const movieRatings = await fetchMovieRatings(id);
            setMovie(movieDetails);
            setRatings(movieRatings);
        };
        getData();
    }, [id]);

    if (!movie) return <Loader />;

    return (
        <>
            <StyledMovieDetail>
                {movie.primaryImage && movie.primaryImage.url ? <img src={movie.primaryImage.url} alt={movie.titleText.text} /> : ''}

                <div>
                    {movie.titleText && movie.titleText.text ? <h1>{movie.titleText.text}</h1> : ''}

                    <p>
                        Release date:
                        {movie.releaseDate ? `${movie.releaseDate.day}-${movie.releaseDate.month}-${movie.releaseDate.year}` : 'No data'}
                    </p>
                    {movie.id ? <p>{`IMDB ID: ${movie.id}`}</p> : ''}
                    <h2>Ratings</h2>
                    {ratings ? (
                        <div>
                            <p>Average Rating: {ratings.averageRating}</p>
                            <p>Number of Ratings: {ratings.numVotes}</p>
                        </div>
                    ) : (
                        <p>No ratings available</p>
                    )}
                </div>
            </StyledMovieDetail>
            <Button onClickFunction={() => navigate(-1)}>Back</Button>
        </>
    );
};

export default MovieDetail;
