import { Link } from "react-router-dom"

function Pagination({search, page, hasNextPage}) {
    return (
        <nav>
            <ul className="pagination justify-content-center">
                {page == 1 ? (
                    <li className="page-item disabled">
                        <a className="page-link">Previous</a>
                    </li>
                ) : (
                    <li className="page-item">
                        <Link to={`/search/${search}/${Number.parseInt(page) - 1}`} className="page-link">Previous</Link>
                    </li>
                )}
                
                <li className="page-item"><a className="page-link">{page}</a></li>

                {hasNextPage ? (
                    <li className="page-item">
                        <Link to={`/search/${search}/${Number.parseInt(page) + 1}`} className="page-link">Next</Link>
                    </li>
                ) : (
                    <li className="page-item disabled">
                        <a className="page-link">Next</a>
                    </li> 
                )}
                
            </ul>
        </nav>
    )
}

export default Pagination