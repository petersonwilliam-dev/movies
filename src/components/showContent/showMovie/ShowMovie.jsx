import Genres from '../elements/genres/Genres'
import Producers from '../elements/producers/Producers'
import Review from '../elements/review/Review'
import Overview from '../elements/overview/Overview'
import Trailer from '../elements/trailer/Trailer'

import '../elements/review/Review.css'

function ShowMovie({movie}) {

    return (
        <div className="showContent">
            <div className="principal-information mb-5">
                <div className="row">
                    <div className="col-12 col-lg-4 d-flex justify-content-center mb-4">
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`Poster ${movie.title}`} />
                    </div>
                    <div className="col-12 col-lg-8 d-flex flex-column">
                        <div className="title">
                            <h3 className="display-5">{movie.title}</h3>
                        </div>
                        <Review vote_average={movie.vote_average} />
                        <Producers production_companies={movie.production_companies}/>
                        <Genres genres={movie.genres}/>
                        <div className="duration">
                            <p><strong>Duration: </strong>{movie.runtime} minutes</p>
                        </div>
                        <div className="releaseDate">
                            <p><strong>Release date: </strong>{movie.release_date}</p>
                        </div>
                        <div className="isAdult">
                            <p><strong>Adult? </strong>{movie.adult ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Overview overview={movie.overview}/>
            <Trailer type={movie.type} id={movie.id}/>
            <hr />
            <div className="homepage d-flex justify-content-end">
                <a href={`${movie.homepage}`} target="_blank"><button className="btn btn-warning">View homepage</button></a>
            </div>
        </div>
    )
}

export default ShowMovie