import React from 'react';
import SwiperComponent from 'components/organisms/SwiperComponent/SwiperComponent';

const FrontPage = ({ data }) => {
    return (
        <>
            <SwiperComponent title="most_pop_series" data={data.data1} />
            <SwiperComponent title="top_boxoffice_200" data={data.data2} />
            <SwiperComponent title="top_rated_english_250" data={data.data3} />
            <SwiperComponent title="top_rated_lowest_100" data={data.data4} />
            <SwiperComponent title="top_rated_series_250" data={data.data5} />
        </>
    );
};

export default FrontPage;
