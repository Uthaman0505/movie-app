import './homepage.scss'
import React, { useEffect, useState } from 'react'
import MoviesData from '../../api/movie_db.json'
import NoImage from '../../assets/no-image.png'

const Homepage = () => {

    const [getAll, setGetAll] = useState(false)
    const [movieData, setMovieData] = useState(MoviesData.movies)
    const [serachInput, setSerachInput] = useState('')

    // console.log(movieData, 'movie');

    useEffect(() => {
        const leftIcon = document.getElementsByClassName('left-btn')[0]
        const rightIcon = document.getElementsByClassName('right-btn')[0]
        leftIcon.addEventListener('mouseover', () => {
            const leftBackground = document.getElementsByClassName('left-background')[0]
            leftBackground.classList.add('back-color-left')
        })

        rightIcon.addEventListener('mouseover', () => {
            const rightBackground = document.getElementsByClassName('right-background')[0]
            rightBackground.classList.add('back-color-right')
        })

        leftIcon.addEventListener('mouseout', () => {
            const leftBackground = document.getElementsByClassName('left-background')[0]
            leftBackground.classList.remove('back-color-left')
        })

        rightIcon.addEventListener('mouseout', () => {
            const rightBackground = document.getElementsByClassName('right-background')[0]
            rightBackground.classList.remove('back-color-right')
        })

    }, [])

    const btnClicked = (genre) => {

        let filteredMovies = []
        for (let i = 0; i < MoviesData.genres.length; i++) {
            const genreBtns = document.getElementsByClassName(`${MoviesData.genres[i]}`)[0]
            genreBtns.classList.remove('clicked-color')
        }
        const genreBtn = document.getElementsByClassName(`${genre}`)[0]
        genreBtn.classList.add('clicked-color')
        setGetAll(true)
        for (let i = 0; i < MoviesData.movies.length; i++) {
            if (MoviesData.movies[i].genres.includes(genre)) filteredMovies.push(MoviesData.movies[i])
        }
        setMovieData(filteredMovies)
    }
    // console.log(movieData, 'movie');


    const getAllMovies = () => {
        for (let i = 0; i < MoviesData.genres.length; i++) {
            const genreBtns = document.getElementsByClassName(`${MoviesData.genres[i]}`)[0]
            genreBtns.classList.remove('clicked-color')
        }
        const scrollToBegineer = document.querySelector('.genres-btn-container');
        scrollToBegineer.scrollLeft = 0
        setGetAll(false)
        setMovieData(MoviesData.movies)
        setSerachInput('')
    }


    const scroll = (direction) => {
        const scrollBtns = document.querySelector('.genres-btn-container');
        if (direction === 'left') {
            scrollBtns.scrollBy(350, 0)
        } else {
            scrollBtns.scrollBy(-350, 0)
        }
    }

    const submitForm = () => {
        if (serachInput !== '') {
            setGetAll(true)
            let filteredMovies = []
            for (let i = 0; i < MoviesData.movies.length; i++) {
                if (MoviesData.movies[i].title.includes(serachInput)) filteredMovies.push(MoviesData.movies[i])
                if (MoviesData.movies[i].actors.includes(serachInput)) filteredMovies.push(MoviesData.movies[i])
            }
            setMovieData(filteredMovies)
        }
    }


    return (
        <>
            <div className="row">
                <div className="homepage">
                    <header className="homepage-header">
                        <h1>Movie App</h1>
                    </header>
                </div>
            </div>
            <div className="container mt-4 movies-list-container">
                <div className="row genres-cover d-flex">
                    <div className='left-background'></div>
                    <div className="left-arrow-btn">
                        <button onClick={() => scroll('left')} className='left-btn'><i className="bi bi-arrow-left-circle-fill"></i></button>
                    </div>


                    <div className="genres-btn-container">
                        {
                            MoviesData.genres.map((genres) => <button onClick={() => btnClicked(genres)} id={genres} key={genres} className={`genres-btns ${genres}`}>{genres}</button>)
                        }
                    </div>

                    <div className='right-background'></div>
                    <div className="right-arrow-btn">
                        <button onClick={() => scroll('right')} className='right-btn'><i className="bi bi-arrow-right-circle-fill"></i></button>
                    </div>


                </div>
                {
                    getAll ? <div className="row">
                        <div className="all-movies-btn-container mt-4">
                            <button onClick={() => getAllMovies()} className='get-all-btn'>Get All Movies</button>
                        </div>
                    </div> : ''
                }


                <div className="row">
                    <div className="form-container mt-4">
                        <div class="mb-3">
                            <input value={serachInput} onChange={(e) => setSerachInput(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Movie Title / Movie Actor' />
                        </div>
                        <button onClick={() => submitForm()} type="submit" class="btn btn-success">Submit</button>

                    </div>
                </div>




                <div class="row row-cols-1 row-cols-md-4 g-4 mt-4">
                    {
                        movieData.map((movie, index) => (
                            <div class="col">
                                <div class="card ">
                                    <div className="img-container d-flex align-items-center justify-content-center bg-primary" style={{ width: '100%', height: '250px' }}>
                                        <img src={movie.posterUrl ? movie.posterUrl : NoImage} style={{ width: '70%', height: '250px' }} class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">{movie.title}</h5>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>

















            </div>




        </>
    )
}

export default Homepage