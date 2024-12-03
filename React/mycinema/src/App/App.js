import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from '../Components/Banner/Banner';
import Movies from '../Components/Movies/Movies';

export default function App() {
    const [movies, setMovies] = useState([]);
    const getMovie = () => {
        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=4750f5f148b3a6e6021909f3a4999b44&language=ru`,
        )
            .then((response) => response.json())
            .then((json) => setMovies(json.results))
            .then((response) => console.log(response));
    };
    useEffect(() => {
        getMovie();
    }, []);
    console.log(movies);

    return (
        <>
            <nav className="header-site">
                <div className="container">
                    <div className="header__content">
                        <div className="header__logo__menu">
                            <div className="header__logo" />
                            <li>Фильмы</li>
                            <li>Сериалы</li>
                            <li>Люди</li>
                            <li>Ещё</li>
                        </div>
                        <div className="header__buttons">
                            <button class="btn__plus">
                                <img
                                    className="btn__plus__image"
                                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg"
                                    alt="img-plus"
                                />
                            </button>
                            <button class="btn__language">RU</button>
                            <button class="btn__bell">
                                <img
                                    className="btn__bell__image"
                                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-441-bell-9cd2af257b98c4af3460078777d8e38a5e12bca89704eeac2f39273afcbd06ff.svg"
                                    alt=""
                                />
                            </button>
                            <button class="btn__join">
                                <div className="btn-login">A</div>
                            </button>
                            <button class="btn__search">
                                <img
                                    className="btn__search__image"
                                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Banner />
            <Movies movies={movies} />
        </>
    );
}
