import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const API_HOST = process.env.REACT_APP_API_HOST;

export const fetchData = async (list) => {
    const options = {
        method: 'GET',
        url: API_URL,
        params: { list },
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST,
        },
    };

    try {
        const response = await axios.request(options);
        return response.data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchSearch = async (data, exact = false) => {
    const options = {
        method: 'GET',
        url: `${API_URL}/search/title/${data}`,
        params: {
            exact: exact,
            limit: 30,
        },
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST,
        },
    };

    try {
        const response = await axios.request(options);
        return response.data.results;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const fetchMovieDetails = async (id) => {
    const options = {
        method: 'GET',
        url: `${API_URL}/${id}`,
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST,
        },
    };

    try {
        const response = await axios.request(options);
        return response.data.results;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const fetchMovieRatings = async (id) => {
    const options = {
        method: 'GET',
        url: `${API_URL}/${id}/ratings`,
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST,
        },
    };

    try {
        const response = await axios.request(options);
        return response.data.results;
    } catch (error) {
        console.error(error);
        return null;
    }
};
