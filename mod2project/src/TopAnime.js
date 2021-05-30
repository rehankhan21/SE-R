import React, { Component } from 'react'
import axios from 'axios'
import DisplayTop from './DisplayTop'
import { connect } from 'react-redux'

class TopAnime extends Component {

    constructor(props){
        super(props)

        // this.state = {
        //     topList : []
        // }

        this.fetchTopAnime = this.fetchTopAnime.bind(this)
    }

    async fetchTopAnime() {

        let res = ""
        const options = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/top/anime/1/upcoming',
            headers: {
                'x-rapidapi-key': 'bbb8bbd286msh51087b0bbfe175fp14ad82jsn950349773c0d',
                'x-rapidapi-host': 'jikan1.p.rapidapi.com'
            }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            res=response.data
        }).catch(function (error) {
            console.error(error);
        });


        if (res.top !== undefined) {
            let newArray = res.top.slice()

            // this.setState({
            //     topList: newArray
            // })

            this.props.dispatch({
                type: 'ADD_ITEM_TOP',
                payload: {
                    id: 1,
                    arr: newArray
                }
            })

            console.log(newArray)
        }
        
        console.log(this.props.topList)

    }


    render() {
        return(
            <div>
                <button onClick={this.fetchTopAnime}>Top 50 Anime</button>
                {/* <DisplayTop topList = {this.state.topList}/> */}
                <DisplayTop topList = {this.props.topList}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
        
    return {
        topList : state.topList
    }
}

export default connect(mapStateToProps)(TopAnime)