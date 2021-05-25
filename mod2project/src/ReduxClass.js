import React, { Component } from 'react'
import { connect } from 'react-redux'

class Redux extends Component {

    constructor(props){
        super(props)

        // this.state = {

        //     arr :  [
        //         {
        //             value : ""
        //         }
        //     ]
        // }
    }


    render () {
        return (
            <div>
                Redux Practice
                {/* {JSON.stringfy(this.props.arr)} */}
                {console.log(this.props.arr)}
                {console.log(this.props.id)}
            </div>
        ) 
    }
}

// the state arugment is the global state from the reducer
const mapStateToProps = state => {
    // we have to return an object
    // this is basically creating a prop and setting its value equal to whatever data
    // we want from the global state
    return{
        arr: state.arr,
        id: state.arr[0].id

    }
}

// connect fucntion returns a higher order compoenent
// connedted our compoenent to the redux store
export default connect(mapStateToProps)(Redux)