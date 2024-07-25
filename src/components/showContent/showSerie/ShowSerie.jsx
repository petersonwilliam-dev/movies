import Cast from "../elements/cast/Cast"
import Genres from "../elements/genres/Genres"
import Overview from "../elements/overview/Overview"
import Producers from "../elements/producers/Producers"
import Review from "../elements/review/Review"
import Trailer from "../elements/trailer/Trailer"


function ShowSerie({serie, cast}) {

    return (
        <div className="showContent">
            <div className="principal-information">
                <div className="row">
                    <div className="col-12 col-lg-4 d-flex justify-content-center mb-4">
                        <img src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`} alt={`Poster ${serie.original_name}`} />
                    </div>
                    <div className="col-12 col-lg-8 d-flex flex-column">
                        <div className="title">
                            <h3 className="display-5">{serie.original_name}</h3>
                        </div>
                        <Review vote_average={serie.vote_average}/>
                        <Producers production_companies={serie.production_companies}/>
                        <Genres genres={serie.genres}/>
                        <div className="duration">
                            <p><strong>Number of seasons: </strong>{serie.number_of_seasons}</p>
                            <p><strong>Number of episodes: </strong>{serie.number_of_episodes}</p>
                            <p><strong>Status: </strong>{serie.status}</p>
                        </div>
                        <div className="releaseDate">
                            <p><strong>Release date: </strong>{serie.first_air_date}</p>
                        </div>
                        <div className="isAdult">
                            <p><strong>Adult? </strong>{serie.adult ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Overview overview={serie.overview}/>
            <Cast cast={cast}/>
            <Trailer type={serie.type} id={serie.id}/>
            <hr />
            <div className="homepage d-flex justify-content-end">
                <a href={`${serie.homepage}`} target="_blank"><button className="btn btn-warning">View homepage</button></a>
            </div>
        </div>
    )
}

export default ShowSerie