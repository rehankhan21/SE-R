import React, { Component } from 'react'

class ShowQuestion extends Component {

    constructor(props) {
        super(props)

        this.state = {
            question: this.props.question,
            isActive: false
        }
    }

    render() {
        return (
            <div>
                <button></button>
            </div>
        )
    }

}

export default ShowQuestion