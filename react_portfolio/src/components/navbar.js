import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <nav className="nav">

            < Link className='links navlinks' to='/'>
                <h3>AboutMe</h3>
            </Link>

            < Link className='links navlinks' to='/projects'>
                <h3>Projects</h3>
            </Link>

            < Link className='links navlinks' to='/resume'>
                <h3>Resume</h3>
            </Link>

            < Link className='links navlinks' to='/contact'>
                <h3>Contact</h3>
            </Link>


        </nav>
    );
}

// export default NavBar;