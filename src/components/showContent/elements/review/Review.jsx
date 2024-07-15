import star_review from '../../../../img/star-review.png'

function Review({vote_average}) {

    const renderReview = vote_average => {
        let review = []
        for (let i = 0; i < Math.trunc(vote_average); i++) {
            review.push(<div key={i} className="review-content">
                <img src={star_review} alt="Star review" className="star-review mr-" width="20px"/>
            </div>)
        }

        return review
    }

    return (
        <div className="review d-flex mt-3 mb-3">
            {renderReview(vote_average)}
        </div>
    )
}

export default Review