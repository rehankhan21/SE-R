import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export const SavedWords = (props) => {

    const dispatch = useDispatch();
    function remove(event){
        console.log("hello")

        console.log(event.target.value)
        let del = savedWords.slice();

        if(savedWords.length > 1){
            del.splice(event.target.value - 1, 1);
        }
        else {
            del.pop();
        }
        


        dispatch({
            type: 'REMOVE_SAVED',
            payload: {
                arr: del
            }
        })
    }

    const savedWords = useSelector(state => state.savedWords)
    const display = savedWords.map((savedWords) => 

        <div className="anime_containter">
            <div>id: {savedWords.id}</div>
            <div>word: {savedWords.word}</div>
            <div>Translation: {savedWords.translated}</div>
            <button value={savedWords.id} onClick={remove}>Remove Word</button>
        </div>
    );
    return (
        <div>
            {/* {this.props.word} */}
            {/* {JSON.stringify(savedWords)}
            {console.log(savedWords)} */}
            {display}
        </div>
    )
}   

// const mapStateToProps = (state) => ({
//     savedWords: state.savedWords
// })

// const mapDispatchToProps = {
    
// }

export default SavedWords

