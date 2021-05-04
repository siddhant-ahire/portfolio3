import React from 'react'
import { Typography } from '@material-ui/core'
import profileImg from '../../assets/images/profile.jpg'
import './profile.css'


const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">Siddhant Ahire</Typography>
                <Typography className="title">Full Stack Developer</Typography>
            </div>
            <figure className="profile_image">
                <img src={profileImg} alt="siddhant ahire image" />
            </figure>
            <div className="profile_information">
                Insert Timeline
                <br />
                <button>Button</button>
            </div>

        </div>
    )
}

export default Profile
