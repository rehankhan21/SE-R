import React from 'react'
import axios from "axios";


function TopAnime() {

    let fetchTopAnime = () => {

        const options = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/top/anime/1/upcoming',
            headers: {
                'x-rapidapi-key': 'bbb8bbd286msh51087b0bbfe175fp14ad82jsn950349773c0d',
                'x-rapidapi-host': 'jikan1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <div>
            {fetchTopAnime}
        </div>
    )
}

export default TopAnime
