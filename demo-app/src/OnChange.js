import React, {Component} from 'react';

class OnChange extends Component {

    constructor(props) {
        super(props);

        this.state = {name : ""};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    } 

    handleChange(event) {

        this.setState({name : event.target.value});
    }

    handleSubmit(event) {
        alert("A name was submitted: " + this.state.name);
        event.preventDefault();
    }

    render () {

        return (
            <form onSubmit = {this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}></input>
            </label>
            <input type="submit" value="Submit"></input>
        </form>
        )
    }

}

export default OnChange;