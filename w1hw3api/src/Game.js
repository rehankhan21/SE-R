import React, { Component } from 'react'
import Points from './Points'
import Button from './Button'
import ShowQuestion from './ShowQ.js'

class Game extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: "",
            question: "",
            answer: "",
            category: "",
            isActive: false
        }

        this.getQuestion = this.getQuestion.bind(this)
        // this.getAnswer = this.getAnswer.bind(this)
        this.showQuestion = this.showQuestion.bind(this)
    }

    getQuestion(question, answer, category) {

        this.setState({
            question: question,
            answer: answer,
            category: category
        })

        console.log(this.state.question)
    }

    showQuestion() {

    }

    // getAnswer(answer) {

    //     this.setState({
    //         answer: answer
    //     })
    // }

    render() {

        return (
            <div>
                <h1>Welcome to Jeopardy!</h1>
                <Button getQuestion={this.getQuestion} getAnswer={this.getAnswer} />
                <ShowQuestion />
                <div>
                    <b>Question:</b> {this.state.question}
                </div>
                <div>
                    <b>Answer:</b> {this.state.answer}
                </div>
                <h2>
                    Category: {this.state.category}
                </h2>
                <Points />
            </div>
        )
    }
}


export default Game