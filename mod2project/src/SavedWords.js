import React from 'react'
import { connect } from 'react-redux'

export const SavedWords = (props) => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    savedWords: state.savedWords
})

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, mapDispatchToProps)(SavedWords)

