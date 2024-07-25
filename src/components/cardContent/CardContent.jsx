import { Link } from 'react-router-dom'

import './CardContent.css'

function CardContent({content}) {

    return (
        <div className="card shadow bg-body-tertiary">
            <div className="d-flex justify-content-center p-3">
                <img src={`https://image.tmdb.org/t/p/w200${content.poster_path}`} className="img-fluid" alt="..."/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{content.title}</h5>
                <Link to={`/show/${content.type}/${content.id}`} exact="true" className="btn btn-warning link-light mt-2">See details</Link>
            </div>
        </div>
    )
}

export default CardContent