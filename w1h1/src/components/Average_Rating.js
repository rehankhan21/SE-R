
let averageRating = (props) => {

    return (
        <div className = "averageRating">
            <p>Average Rating</p>
            <p>{props.rating}</p>
        </div>
    )
}

export default averageRating;