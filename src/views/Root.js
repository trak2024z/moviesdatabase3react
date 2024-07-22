import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { StyledContainer } from 'components/templates/StyledContainer/StyledContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from 'components/molecues/Nav/Nav';
import MoviePage from 'components/pages/MoviePage/MoviePage';
import SearchPage from 'components/pages/SearchPage/SearchPage';
import FrontPage from 'components/pages/FrontPage/FrontPage';
import { fetchData } from 'api/api';

const Root = () => {
    const [data, setData] = useState({ data1: [], data2: [], data3: [], data4: [], data5: [] });

    const callAPI = async () => {
        const lists = ['most_pop_series', 'top_boxoffice_200', 'top_rated_english_250', 'top_rated_lowest_100', 'top_rated_series_250'];

        const [data1, data2, data3, data4, data5] = await Promise.all(lists.map(fetchData));
        setData({ data1, data2, data3, data4, data5 });
    };

    useEffect(() => {
        callAPI();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledContainer>
                <Router>
                    <Nav onClickFunction={callAPI} />
                    <Routes>
                        <Route path="/" element={<FrontPage data={data} />} />
                        <Route path="/movie/:id" element={<MoviePage />} />
                        <Route path="/search" element={<SearchPage />} />
                    </Routes>
                </Router>
            </StyledContainer>
        </ThemeProvider>
    );
};

export default Root;
