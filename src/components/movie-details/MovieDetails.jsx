import React, { useEffect, useState } from 'react'
import MoviesData from '../../api/movie_db.json'
import { Link, useParams } from "react-router-dom";
import NoImage from '../../assets/no-image.png'
import './movie-details.scss'

const MovieDetails = () => {

    const { id } = useParams()

    const [movie, setMovie] = useState([])

    useEffect(() => {
        const movie = MoviesData.movies.filter((movie) => movie.id === Number(id))[0]
        setMovie(movie)
    }, [id])

    return (
        <>
            <div className="container-body">
                <div className="container">
                    <div className="row bg-primary d-flex justify-content-center">
                        <div className="movie-poster-container">
                            <img src={movie.posterUrl ? movie.posterUrl : NoImage} alt="" width="100%" height="425px" />
                        </div>
                        <div className="back-arrow-btn">
                            <Link to={{ pathname: `/` }}>
                                <button className='btn btn-warning back-btn'><i className="bi bi-arrow-left-circle-fill"></i> Back to movies List</button>
                            </Link>
                        </div>
                    </div>

                    <div className="row" style={{ border: '2px solid black' }}>
                        <div className="details-content d-flex mt-4">
                            <div className="col-6">
                                <div className="description">
                                    <span>Movie Title</span>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="content">
                                    <span>{movie.title}</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-bottom-5"></div>

                        <div className="details-content d-flex mt-4">
                            <div className="col-6">
                                <div className="description">
                                    <span>Year</span>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="content">
                                    <span>{movie.year}</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-bottom-5"></div>

                        <div className="details-content d-flex mt-4">
                            <div className="col-6">
                                <div className="description">
                                    <span>Runtime</span>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="content">
                                    <span>{movie.runtime} Minutes</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-bottom-5"></div>

                        <div className="details-content d-flex mt-4">
                            <div className="col-6">
                                <div className="description">
                                    <span>Genres</span>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="content">
                                    <span>[{movie.genres && movie.genres.join(", ")}]</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-bottom-5"></div>

                        <div className="details-content d-flex mt-4">
                            <div className="col-6">
                                <div className="description">
                                    <span>Director</span>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="content">
                                    <span>{movie.director}</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-bottom-5"></div>

                        <div className="details-content d-flex mt-4">
                            <div className="col-6">
                                <div className="description">
                                    <span>Actors</span>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="content">
                                    <span>{movie.actors}</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-bottom-5"></div>

                        <div className="details-content d-flex mt-4">
                            <div className="col-6">
                                <div className="description">
                                    <span>Plot</span>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="content">
                                    <span>{movie.plot}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetails