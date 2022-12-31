import React from 'react'
import {
     Link
    } from 'react-router-dom'
// import Hooks from './Hooks'

function Home() {
    return (
        <div>    
            <Link to="/Hooks">Hooks</Link>
            <div></div>
            <Link to="/ItemList">ItemList</Link>
        </div>       
    )
}

export default Home