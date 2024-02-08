import React from 'react';
import Navbar from '../components/Navbar';
const Home = () => {
    return (
        <div>
            <div className="content">
                <h2>Home Page</h2>
                <p>Welcome to the home page!</p>
            </div>
            <div className="navbar">
                <Navbar />
            </div>
        </div>
    );
};

export default Home;