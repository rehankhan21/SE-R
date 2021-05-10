let SentimentAnalysis = (props) => {

    return (
        <div className="SentimentalAnalysis">
            <p>Sentiment Analysis</p>
            <p>{props.num1}</p>
            <p>{props.num2}</p>
            <p>{props.num3}</p>
        </div>
    )
}

export default SentimentAnalysis;