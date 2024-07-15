import loading from '../../img/loading.gif'

import './Loading.css'

function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center containerLoading mt-5 mb-5">
            <img src={loading} alt="Loading..." className="loading"/>
        </div>
    )
}

export default Loading