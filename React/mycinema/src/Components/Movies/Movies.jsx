import React from 'react';
import './movies.css';

const Movies = ({ movies }) => {
    return (
        <>
            <div className="container">
                <div className="trending">
                    <h2>В тренде</h2>
                    <div className="trending__buttons">
                        <button className="trending__btn today">Сегодня</button>
                        <button className="trending__btn this-week">
                            На этой неделе
                        </button>
                    </div>
                </div>
                <div className="movies">
                    {movies.map((movie) => (
                        <div key={movie.id} className="movie-card">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <h3 className="">{movie.title}</h3>
                            <p>{movie.release_date}</p>
                        </div>
                    ))}
                </div>
                <div className="horizontal-scroll"></div>
            </div>
        </>
    );
};

export default Movies;
