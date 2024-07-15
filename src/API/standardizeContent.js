export const standardizeCardContent = (content) => {
    const standardizedCardContent = {
        id: content.id,
        title : content.title ? content.title : content.original_name,
        poster_path: content.poster_path,
        type: content.title ? "movie" : "tv"
    }
    
    return standardizedCardContent
}