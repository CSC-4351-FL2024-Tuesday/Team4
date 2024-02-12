import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-header">
                <img src="avatar.jpg" alt="Avatar" className="avatar" />
                <h1>John Doe</h1>
                <p>Software Developer</p>
            </div>
            <div className="profile-body">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;