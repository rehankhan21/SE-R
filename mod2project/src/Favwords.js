import React from 'react'

function Favwords(props) {
    const list = props.list;
    const display = list.map((list) =>

        <div className="anime_containter">
            <div>ID: {list.id}</div>
            <div>Word: {list.word}</div>
            <div>Translation: {list.translated}</div>
            <button value={list.id}>Save Word</button>
        </div>
    );

    return (
        <div>
            {display}
        </div>
    )
}

export default Favwords
