function Producers({production_companies}) {

    const renderProducers = production_companies => {

        if (!Array.isArray(production_companies)) {
            return null
        }

        let producers = []
        production_companies.map((companie, index) => {
            producers.push(<span key={index}>
                {companie.name}{index < production_companies.length - 1 ? ', ': ''}
            </span>)
        })

        return producers
    }

    return (
        <div className="producers">
            <p><strong>Producers: </strong>{renderProducers(production_companies)}</p>
        </div>
    )
}

export default Producers