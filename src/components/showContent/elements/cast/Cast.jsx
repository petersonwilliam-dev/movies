import star from '../../../../img/ContentNotFound.webp'
import './Cast.css'

function Cast({cast}) {
    return (
        <div className="cast mt-5 mb-5">
            <h3 className="display-5">Cast</h3>
            <hr />
            <div className="participantContainer d-flex justify-content-center flex-wrap">
                {cast.map(participant => (
                    <div key={participant.id} className="card cardCast m-4">
                        <div className="row g-0">
                            <div className="col-4">
                                <img src={`https://image.tmdb.org/t/p/w200${participant.profile_path}`} alt={participant.original_name} className='img-fluid'/>
                            </div>
                            <div className="col-8 p-3">
                                <h2>{participant.original_name}</h2>
                                <p>{participant.character}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cast