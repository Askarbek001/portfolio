import React, { useState } from 'react';
import { Homes } from '../Components/homes/Homes';
import { Upcomming } from './../Components/Upcomming/Upcomming';
import { upcome, latest, recommended } from './../dummyData';
import { Trending } from '../Components/trending/Trending';

export const HomePages = () => {
    const [items, setItems] = useState(upcome);
    const [item, setItem] = useState(latest);
    const [rec, setRec] = useState(recommended);
    return (
        <>
            <Homes />
            <Upcomming items={items} title="Upcomming Movies" />
            <Upcomming items={item} title="Latest Movies" />
            <Trending />
            <Upcomming items={rec} title="Recommended Movies" />
        </>
    );
};
