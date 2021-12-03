import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {

    return (
        <div className="nav-container">
            <NavLink className="nav-title" to='/'>Garden Project</NavLink>
            <nav className="navbar-links">

                    <NavLink className="nav-link" to='/signup'>Sign up</NavLink>
                    <NavLink className="nav-link" to='/login'>Login</NavLink>

            </nav>
        </div>
        
    )
}

export default Nav;