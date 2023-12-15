import React from 'react';
import './Profile.css';

interface Props {
    name: string;
    setName: (name: string) => void;
    patronymic: string;
    setPatronymic: (patronymic: string) => void;
    login: string;
    setLogin: (login: string) => void;
    surname: string;
    setSurname: (surname: string) => void;
    idNum: string;
    setIdNum: (idNum: string) => void;
}

export const ProfilePersonalData = (props: Props) => {
    const {
        name,
        setName,
        patronymic,
        setPatronymic,
        surname,
        setSurname,
        login,
        setLogin,
        idNum,
        setIdNum
    } = props;

    return (
        <div className='profile-personalData'>
            <div className='profile-personalData-title'>Личные данные</div>
            <div className='columns'>
                <div className='fist-column'>
                    <div className='row'>
                        <label className='required' htmlFor="name">Имя</label>
                        <input
                            id='name'
                            className='profile-input name'
                            type='text'
                            name='name'
                            value={name}
                            placeholder='Введите имя'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='row'>
                        <label className='required' htmlFor="patronymic">Отчество</label>
                        <input
                            id='patronymic'
                            className='profile-input patronymic'
                            type='text'
                            name='patronymic'
                            placeholder='Введите отчество'
                            value={patronymic}
                            onChange={(e) => setPatronymic(e.target.value)}
                        />
                    </div>
                    <div className='row'>
                        <label className='required' htmlFor="login">Логин</label>
                        <input
                            id='login'
                            className='profile-input login'
                            type='text'
                            name='login'
                            placeholder='Введите логин'
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>
                </div>
                <div className='second-column'>
                    <div className='row'>
                        <label className='required' htmlFor="surname">Фамилия</label>
                        <input
                            id='surname'
                            className='profile-input surname'
                            type='text'
                            name='surname'
                            value={surname}
                            placeholder='Введите фамилию'
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </div>
                    <div className='row'>
                        <label className='required' htmlFor="idNum">Идентификационный номер</label>
                        <input
                            id='idNum'
                            className='profile-input idNum'
                            type='text'
                            name='idNum'
                            value={idNum}
                            placeholder='Введите идентификационный номер'
                            onChange={(e) => setIdNum(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}