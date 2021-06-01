import React from 'react'
import axios from 'axios'
import { Component } from 'react'
import Favwords from './Favwords'

import { connect } from 'react-redux'

class Translate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            word: "hello",
            translated: ""
        }
        
        this.fetchTranslation = this.fetchTranslation.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // Deep Translate api
    async fetchTranslation(event) {
        event.preventDefault()
        let res = "";
        const options = {
            method: 'POST',
            url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-key': 'bbb8bbd286msh51087b0bbfe175fp14ad82jsn950349773c0d',
                'x-rapidapi-host': 'deep-translate1.p.rapidapi.com'
            },
            data: { q: this.state.word, source: 'en', target: 'ja' }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            res = response.data.data
            console.log(response.data.data.translations.translatedText)
            // word: response.data.translations.translatedText
        }).catch(function (error) {
            console.error(error);
        });

        this.setState({
            translated: res.translations.translatedText
        })

        let wordList = this.props.wordList.slice()
        // wordList.push(this.state.word)
        // wordList.push(this.state.translated)
        let prevTrans = {
            id: this.state.id += 1,
            word: this.state.word,
            translated: this.state.translated
        }

        wordList.push(prevTrans)

        // this.setState({
        //     list: wordList
        // })

        this.props.dispatch({
            type: 'ADD_WORD',
            payload: {
                arr: wordList
            }
        })
    }

    handleChange(event) {

        this.setState({
            word: event.target.value
        })
    }


    render() {

        return(
            <div>
                <form onSubmit={this.fetchTranslation}>
                    <label>Enter Word: </label>
                    <input value={this.state.word} onChange={this.handleChange}></input>
                    <button>Translate</button>
                </form>
                {/* <div>{this.state.word}</div> */}
                <div>
                    {/* {this.state.translated} */}
                </div>
                <Favwords list = {this.props.wordList}/>
            </div>
        )
    }

}

const mapStateToProps = state => {

    return {
        wordList : state.wordList
    }
}

export default connect(mapStateToProps)(Translate);