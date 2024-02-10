import React from 'react';
import { Link } from 'react-router-dom';

const Exercise = () => {
    return (
        <div>
            <h2>Choose Difficulty</h2>
            <ul>
                <li>
                    <Link to="/exercise/home">Easy</Link>
                </li>
            </ul>
        </div>
    )
}

export default Exercise;