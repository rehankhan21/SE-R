import React from 'react'
import SavedWords  from './SavedWords';
import {connect} from 'react-redux'
import {useDispatch, useSelector} from 'react-redux'

function Favwords(props) {

    const dispatch = useDispatch();
    const savedWords = useSelector(state => state.savedWords)

    //console.log(saveWords[0])
    function saveWord(event) {

        let saved = props.list[event.target.value - 1];
        console.log(saved);
        console.log(event.target.value);
        // <SavedWords word={saved}/>;

        let savedArr = savedWords.slice()
        savedArr.push(saved);

        dispatch({
            type: 'SAVE_WORD',
            payload: {
                word: savedArr
            }
        })

        console.log(savedWords)
    }

    const list = props.list;
    //let id = props.list.id + 1;
    const display = list.map((list) =>

        <div key={list.id} className="anime_containter">
            <div>ID: {list.id}</div>
            <div>Word: {list.word}</div>
            <div>Translation: {list.translated}</div>
            <button value={list.id} onClick={saveWord}>Save Word</button>
        </div>
    );

    return (
        <div>
            {display}
            {/* {console.log(props.list)}
            {console.log(props.list.id)} */}
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     savedWords : state.savedWords
// })

export default Favwords 
