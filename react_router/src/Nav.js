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
                    <li>
                        <Link>Contact</Link>
                    </li>
                    <li>
                        <Link>Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    
        )
}

export default Nav;