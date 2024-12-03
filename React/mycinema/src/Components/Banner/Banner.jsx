import React from 'react';
import banner from './../../Photo/banner.jpg';
import './banner.css';

const Banner = () => {
    return (
        <div>
            <section className="section__banner">
                <div className="container">
                    <div
                        className="banner__content"
                        style={{ backgroundImage: `url(${banner})` }}
                    >
                        <div className="banner__title">
                            <h1>Добро пожаловать.</h1>
                            <h3>
                                Миллионы фильмов, сериалов и людей. Исследуйте
                                сейчас.
                            </h3>
                            <input
                                dir="auto"
                                id="inner_search_v4"
                                name="query"
                                type="text"
                                autocorrect="off"
                                autofill="off"
                                autocomplete="off"
                                spellcheck="false"
                                placeholder="Найти фильм, сериал, персону......"
                                value=""
                                wfd-id="id4"
                            />
                            <input type="submit" value="Search" wfd-id="id5" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
