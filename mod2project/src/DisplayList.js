import React from 'react'

function DisplayList(props) {
    // for(let i = 0; i <= 5; i++){
    //     // return <div>
    //     //     <div>{JSON.stringify(props.list[i].title)}</div>
    //     //     <img src={props.list[i].image_url}></img>
    //     //     <div>Score: {props.list[i].score} /10</div>
    //     //     <div>{props.list[i].synopsis}</div>
    //     //     <a href={props.list[i].url}>myanimelist</a>
    //     // </div>

    // };

    const list = props.list;
    const display = list.map((list) =>

        <div>
            <div>{list.title}</div>
            <img src={list.image_url} alt="not found"></img>
            <div>Score: {list.score} /10</div>
            <div>{list.synopsis}</div>
            <a href={list.url}>myanimelist</a>
        </div>
    );

    return (
        <div>
            {display}
        </div>
    )
}

export default DisplayList
