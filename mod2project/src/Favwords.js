import React from 'react'

function Favwords(props) {

    function saveWord(event) {

    }

    const list = props.list;
    const display = list.map((list) =>

        <div className="anime_containter">
            <div>ID: {list.id}</div>
            <div>Word: {list.word}</div>
            <div>Translation: {list.translated}</div>
            <button value={list.id} onClick={saveWord}>Save Word</button>
        </div>
    );

    return (
        <div>
            {display}
        </div>
    )
}

export default Favwords
