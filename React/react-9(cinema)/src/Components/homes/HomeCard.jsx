import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

export const HomeCard = ({
    item: {
        id,
        cover,
        name,
        rating,
        time,
        desc,
        starring,
        genres,
        tags,
        video,
    },
}) => {
    return (
        <>
            <div className="box">
                <div className="coverImage">
                    <img src={cover} alt="" />
                </div>
                <div className="content flex">
                    <div className="details row">
                        <h1>{name}</h1>
                        <div className="rating flex">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half"></i>
                        </div>
                        <label>{rating}</label>
                        <span>GP</span>
                        <label>{time}</label>

                        <p>{desc}</p>
                        <div className="cast">
                            <h4>
                                <span>Genres</span>
                                {genres}
                            </h4>
                            <h4>
                                <span>Tags</span>
                                {tags}
                            </h4>
                        </div>
                        <button className="primary-btn">
                            <i className="fas fa-play"></i>PLAY NOW
                        </button>
                    </div>
                    <div className="playButton row">
                        <Link to={`/singlepage/${id}`}></Link>
                        <button>
                            <div className="img">
                                <img src="./images/play-button.png" alt="" />
                                <img
                                    className="change"
                                    src="./images/play.png"
                                    alt=""
                                />
                            </div>
                            WATCH TRAILER
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
