import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ userName }) => {
    return (
        <header>
            <div className="container">
                <h1>Welcome {userName}!</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Exercise</Link>
                        </li>
                        <li>
                            <Link to="/user">User</Link>
                        </li>
                        <li>
                            <Link to="/camera">Camera</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;