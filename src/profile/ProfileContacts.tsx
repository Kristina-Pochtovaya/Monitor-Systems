import React, { useState } from 'react';
import './Profile.css';

interface Props {
    email: string;
    setEmail: (email: string) => void;
    mobile: string;
    setMobile: (mobile: string) => void;
}

export const ProfileContacts = ({ email, setEmail, mobile, setMobile }: Props) => {
    const [areContactsDisabled, setAreContactsDisabled] = useState(true);

    return (
        <div className='profile-contacts'>
            <div className='contacts-header'>
                <div className='contacts-title'>Контакты</div>
                <button className='contacts-edit' onClick={() => setAreContactsDisabled(false)}>
                    Редактировать
                </button>
            </div>
            <div>
                <div className='columns'>
                    <div className='row'>
                        <label htmlFor="name">Адрес электронной почты</label>
                        <input
                            id='email'
                            className={`profile-input email ${areContactsDisabled ? 'disabled' : ''}`}
                            type='text'
                            name='email'
                            value={email}
                            placeholder='Введите адрес электронной почты'
                            disabled={areContactsDisabled}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='row'>
                        <label className='required' htmlFor="name">Мобильный номер</label>
                        <input
                            id='mobile'
                            className={`profile-input mobile ${areContactsDisabled ? 'disabled' : ''}`}
                            type='text'
                            name='mobile'
                            value={mobile}
                            disabled={areContactsDisabled}
                            placeholder='Введите мобильный номер'
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}