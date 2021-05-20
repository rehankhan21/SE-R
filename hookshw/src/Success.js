import React from 'react'

function Success (props) {
    console.log(props.username)
    return(
        <div>You are logged in {props.name}</div>
        
    )

}

export default Success;