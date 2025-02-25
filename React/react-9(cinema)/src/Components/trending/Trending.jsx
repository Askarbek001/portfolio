import React, { useState } from 'react';
import './Trending.css';
import { Home } from './../homes/Home';
import { trending } from './../../dummyData';

export const Trending = () => {
    const [items, setItems] = useState(trending);
    return (
        <>
            <section className="trending">
                <Home items={items} />
            </section>
        </>
    );
};
