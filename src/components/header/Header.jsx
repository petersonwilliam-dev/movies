import { Link } from "react-router-dom"
import { useState } from "react"

import logo from '../../img/logo.webp'

import './Header.css'

function Header() {

    const [search, setSearch]= useState('')

    return (
        <header>
            <div className="row bg-dark g-0">
                <div className="col-12 col-lg-4 p-4">
                    <div className="d-flex justify-content-center align-items-center">
                        <Link exact="true" to="/">
                            <img src={logo} alt="Logo Movies" className="logoMovies"/>
                            <h1 className="text-light display-4">Movies Pw</h1>
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-lg-8 p-4">
                    <div className="d-flex justify-content-center align-items-center">
                        <input type="text" placeholder="What film or series are you looking for?" className="inputSearch" onChange={e => setSearch(e.target.value)}/>
                        <Link to={`/search/${search}/1`}><button className="btn btn-light rounded-circle buttonSearch"><ion-icon name="search-outline"></ion-icon></button></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header