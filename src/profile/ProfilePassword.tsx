import React, { useState } from 'react';
import './Profile.css';
import eyeSlash from '../assets/eye-slash.png';

interface Props {
    currentPassword: string;
    setCurrentPassword: (currentPassword: string) => void;
    newPassword: string;
    setNewPassword: (newPassword: string) => void;
    confirmedNewPassword: string;
    setConfirmedNewPassword: (confirmedNewPassword: string) => void;
}

export const ProfilePassword = (props: Props) => {
    const {
        currentPassword,
        setCurrentPassword,
        newPassword,
        setNewPassword,
        confirmedNewPassword,
        setConfirmedNewPassword,
    } = props;

    const [isPasswordDisabled, setIsPasswordDisabled] = useState(true);
    const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isConfirmedNewPasswordVisible, setIsConfirmedNewPasswordVisible] = useState(false);


    return (
        <div className='profile-password'>
            <div className='password-header'>
                <div className='password-title'>Пароль</div>
                <button className='password-edit' onClick={() => setIsPasswordDisabled(false)}>
                    Редактировать
                </button>
            </div>
            <div>
                <div className='columns'>
                    <div className='first-column'>
                        <div className='row eyeSlash'>
                            <label htmlFor="currentPassword">Текущий пароль</label>
                            <input
                                id='currentPassword'
                                className={`profile-input currentPassword ${isPasswordDisabled ? 'disabled' : ''}`}
                                type={`${isCurrentPasswordVisible ? 'text' : 'password'}`}
                                name='currentPassword'
                                value={currentPassword}
                                placeholder='Введите текущий пароль'
                                disabled={isPasswordDisabled}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                            {!isCurrentPasswordVisible && <img
                                src={eyeSlash}
                                className='eyeSlash-icon currentPassword'
                                alt='eyeSlash'
                                onClick={() => setIsCurrentPasswordVisible(true)}
                            />}
                        </div>
                        <div className='row eyeSlash'>
                            <label htmlFor="name">Новый пароль</label>
                            <input
                                id='newPassword'
                                className={`profile-input newPassword ${isPasswordDisabled ? 'disabled' : ''}`}
                                type={`${isNewPasswordVisible ? 'text' : 'password'}`}
                                name='newPassword'
                                value={newPassword}
                                placeholder='Введите новый пароль'
                                disabled={isPasswordDisabled}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            {!isNewPasswordVisible && <img
                                src={eyeSlash}
                                className='eyeSlash-icon newPassword'
                                alt='eyeSlash'
                                onClick={() => setIsNewPasswordVisible(true)}
                            />}
                        </div>
                    </div>

                    <div className='second-column'>
                        <div className='row eyeSlash'>
                            <label htmlFor="name">Подтвердите пароль</label>
                            <input
                                id='confirmedNewPassword'
                                className={`profile-input confirmedNewPassword ${isPasswordDisabled ? 'disabled' : ''}`}
                                type={`${isConfirmedNewPasswordVisible ? 'text' : 'password'}`}
                                name='confirmedNewPassword'
                                value={confirmedNewPassword || newPassword}
                                placeholder='Подтвердите пароль'
                                disabled={isPasswordDisabled}
                                onChange={(e) => setConfirmedNewPassword(e.target.value)}
                            />
                            {!isConfirmedNewPasswordVisible && <img
                                src={eyeSlash}
                                className='eyeSlash-icon confirmedNewPassword'
                                alt='eyeSlash'
                                onClick={() => setIsConfirmedNewPasswordVisible(true)}
                            />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
