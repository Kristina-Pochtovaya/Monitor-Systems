import React from 'react';
import './Profile.css';
import active from "../assets/active.png";
import user from "../assets/user.png";

interface Props {
    name: string;
    surname: string;
}

export const ProfileName = ({ name, surname }: Props) => {
    return (
        <div className='profile-name'>
            <div className='circle'></div>
            <div className='name'>{name}</div>
            <div className='surname'>{surname}</div>
            <div className='active-user'><img className='active-user-icon' src={active} alt='active-user'/>
            </div>
            <div className='user'><img className='user-icon' src={user} alt='user'/></div>
        </div>
    )
}