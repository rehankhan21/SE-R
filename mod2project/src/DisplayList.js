import React from 'react'

function DisplayList(props) {
    for(let i = 0; i <= 5; i++){
        return <div>
            <div>{JSON.stringify(props.list[i].title)}</div>
            <img src={props.list[i].image_url}></img>
            <div>Score: {props.list[i].score} /10</div>
            <div>{props.list[i].synopsis}</div>
            <a href={props.list[i].url}>myanimelist</a>
        </div>
    };
    return (
        <div>
            {
                // props.list.forEach(element => {
                //     return <div>element.title</div>
                // })
            }
        </div>
    )
}

export default DisplayList
