import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSearch } from 'api/api';
import Input from 'components/atoms/Input/Input';
import Loader from 'components/atoms/Loader/Loader';
import Checkbox from 'components/atoms/Checkbox/Checkbox';
import MovieItem from 'components/molecues/MovieItem/MovieItem';
import { StyledResultsGrid } from 'components/templates/StyledResultsGrid/StyledResultsGrid';

const Search = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');
    const [noResults, setNoResults] = useState(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    useEffect(() => {
        const delayDebounce = setTimeout(async () => {
            if (query.length > 2) {
                setIsLoading(true);
                const searchResults = await fetchSearch(query, isCheckboxChecked);
                setResults(searchResults);
                setIsLoading(false);
                setNoResults(!searchResults || searchResults.length === 0);
            } else {
                setResults([]);
                setNoResults(false);
            }
        }, 1000);

        return () => clearTimeout(delayDebounce);
    }, [query, isCheckboxChecked]);

    const navigate = useNavigate();

    const handleSearch = ({ target }) => {
        setQuery(target.value);
    };

    const handleClick = (id) => {
        navigate(`/movie/${id}`);
    };

    const handleCheckbox = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
    };

    return (
        <div>
            <Checkbox isChecked={isCheckboxChecked} onChange={handleCheckbox} />
            <Input onKeyUpFunction={handleSearch} placeholder="Search movies..." type="text" />
            {isLoading && <Loader />}
            <StyledResultsGrid>
                {!isLoading && noResults && <div>No movies found</div>}
                {!isLoading &&
                    results &&
                    results.map((item) => (
                        <div key={item.id} onClick={() => handleClick(item.id)}>
                            <MovieItem item={item} />
                        </div>
                    ))}
            </StyledResultsGrid>
        </div>
    );
};

export default Search;
