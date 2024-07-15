import contentNotFound from '../../img/ContentNotFound.webp'
import './ContentNotFound.css'

function ContentNotFound() {
    return(
        <div className="d-flex justify-content-center align-items-center p-5"> 
            <div className='text-center'>
                <h3 className="display-4 mb-4">Content Not Found</h3>
                <img src={contentNotFound} className='mb-3' alt="Content not found" />
                <p className="lead text-center">Oops! This content was not found</p>
            </div>
        </div>
    )
}

export default ContentNotFound