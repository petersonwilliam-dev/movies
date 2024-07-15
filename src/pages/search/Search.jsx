import { APIKey } from "../../API/APIKey"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { filterSearch } from '../../API/filterSearch.js'

import ListContent from "../../components/listContent/ListContent"
import Loading from "../../layout/loading/Loading"
import Pagination from '../../components/pagination/Pagination'

import './Search.css'

function Search() {

    const {search, page} = useParams()

    const [mediaSearched, setMediaSearched] = useState([])
    const [status, setStatus] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(false)

    useEffect(() => {
        axios.get(`http://api.themoviedb.org/3/search/multi?api_key=${APIKey}&query=${search}&page=${page}`)
        .then(response => {
            setMediaSearched(filterSearch(response.data.results))
            setStatus(true)
        })
        .catch(err => console.log(err))

        axios.get(`http://api.themoviedb.org/3/search/multi?api_key=${APIKey}&query=${search}&page=${Number.parseInt(page) + 1}`)
        .then(response => {
            if (filterSearch(response.data.results).length > 0) {
                setHasNextPage(true)
            } else {
                setHasNextPage(false)
            }
        }).catch(err => {
            setHasNextPage(false)
            console.log(err.response.status)
        })

    }, [search, page])

    return (
        <div className="search">
            <div className="resultsSearch">
                {mediaSearched.length > 0 ? (
                    <ListContent title={`Search results: '${search}'`} contents={mediaSearched}/>
                ) : (
                    <>
                        {status ? (
                            <div className="searchNotFound text-center mt-5">
                                <h3 className="display-5">Search '{search}' has no results</h3>
                                <p className="lead">Search for other titles</p>
                            </div>
                        ) : (
                            <Loading />
                        )}
                    </>

                )}
            </div>
            <Pagination search={search} hasNextPage={hasNextPage} page={page}/>
        </div>
    )
}

export default Search