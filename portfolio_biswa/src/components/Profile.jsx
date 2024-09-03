import React from 'react';
import './Profile.css';
import profilePic from '../assets/ADOBE3.png';

const Profile = () => {
    return (
        <div className="container">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <h1>Biswaranjan Nayak</h1>
            <p>Web Developer | Designer | Programmer</p>
            <div className="social-icons">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </div>
    );
};

export default Profile;
