export const filterSearch = (searches) => {
    let filteredSearch = []
    searches.map(search => {
        if (search.media_type == "movie" || search.media_type == "tv") {
            filteredSearch.push(search)
        }
    })

    return filteredSearch.slice(0, 12)
}