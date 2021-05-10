import React, { Component } from 'react';

class OnChange extends Component {

    constructor(props) {
        super(props);

        this.state = { name: "", area: "" };
        this.handleCha = this.handleChange.bind(this)
        this.handleChaArea = this.handleChangeArea.bind(this)
        this.handleSub = this.handleSubmit.bind(this)
    }

    handleChange(event) {

        this.setState({ name: event.target.value});

    }

    handleChangeArea(event) {
        
        this.setState({ area: event.target.value})
    }

    handleSubmit(event) {
        alert("A name was submitted: " + this.state.name  );
        alert(this.state.name + "'s essay was submitted: " + this.state.area);
        event.preventDefault();
    }

    render() {

        return (
            <form onSubmit={this.handleSub}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleCha}></input>
                </label>
                <label>
                    Essay:
                    <textarea value={this.state.area} onChange={this.handleChaArea}></textarea>
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }

}

export default OnChange;