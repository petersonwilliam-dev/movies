import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { APIKey } from "../../API/APIKey";

import ContentNotFound from '../contentNotFound/ContentNotFound'
import Loading from '../../layout/loading/Loading'
import ShowMovie from "../../components/showContent/showMovie/ShowMovie";
import ShowSerie from "../../components/showContent/showSerie/ShowSerie";

function ShowDetails() {

    const {id, type} = useParams()
    const [content, setContent] = useState(null)
    const [status, setStatus] = useState(0)

    useEffect(() => {
        axios.get(`http://api.themoviedb.org/3/${type}/${id}?api_key=${APIKey}`)
        .then(response => {
            setContent({...response.data, type})
        })
        .catch(err => {
            console.log(err)
            setStatus(err.response.status)
        })
    }, [id])

    return (
        <div>
            {content ? (
                <>
                    {type === "movie" ? (
                        <ShowMovie movie={content}/>
                    ) : (
                        <ShowSerie serie={content} />
                    )}
                </>
            ) : (
                <>
                    {status == 404 ? (
                        <ContentNotFound />
                    ) : (
                        <Loading />
                    )}
                </>
            )}
        </div>
    )
}

export default ShowDetails