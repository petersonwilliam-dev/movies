import { APIKey } from "../../API/APIKey"
import { useState, useEffect } from "react"
import axios from "axios"
import ListContent from "../../components/listContent/ListContent"

function Home() {

    const [filmReleases, setFilmReleases] = useState([])
    const [serieReleases, setSerieReleases] = useState([])

    useEffect(() => {
        axios.get(`http://api.themoviedb.org/3/discover/movie?primary_release_year=${new Date().getFullYear()}&api_key=${APIKey}`)
        .then(response => {
            setFilmReleases(response.data.results.slice(0, 9))
        })
        .catch(err => console.log(err))

        axios.get(`http://api.themoviedb.org/3/discover/tv?primary_release_year=${new Date().getFullYear()}&api_key=${APIKey}`)
        .then(response => {
            setSerieReleases(response.data.results.slice(0, 9))
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="home">
            <ListContent title="Film Releases" contents={filmReleases}/>
            <ListContent title="Serie Releases" contents={serieReleases}/>
        </div>
    )
}

export default Home