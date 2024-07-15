function Genres({genres}) {
    
    const renderGenres = genres => {
        
        if (!Array.isArray(genres)) {
            return null
        }

        let genresInContent = []

        genres.map((genre, index) => {
            genresInContent.push(<span key={index}>
                {genre.name}{index < genres.length - 1 ? ', ' : ''}
            </span>)
        })

        return genresInContent
    }
    
    return (
        <div className="genres">
            <p><strong>Genres: </strong>{renderGenres(genres)}</p>
        </div>
    )
}

export default Genres