import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {


    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>contact</li>
                    <li>
                        <Link>Home</Link>home
                    </li>
                </ul>
            </nav>
        </div>
    
        )
}

export default Nav;