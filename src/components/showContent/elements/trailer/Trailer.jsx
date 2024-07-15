import axios from "axios";
import { useState, useEffect } from "react"
import { APIKey } from "../../../../API/APIKey";

import "./Trailer.css"

function Trailer({type, id}) {

    const [trailer, setTrailer] = useState();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${APIKey}`)
        .then(response => {
            response.data.results.map(video => {
                if (video.type == "Trailer") {
                    setTrailer(video.key)
                    return
                }
            })

        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <div className="trailer mb-5 mt-5">
            <h4 className="display-5">Trailer</h4>
            <hr />
            <div className="container-fluid videoTrailer">
                <iframe src={`https://www.youtube.com/embed/${trailer}`} title="Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Trailer