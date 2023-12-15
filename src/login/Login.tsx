import React, { useState } from 'react';
import './Login.css';
import { Header, HeaderType } from '../header/Header';
import { Navigation, PageType } from '../navigation/Navigation';
import { Footer } from '../footer/Footer';
import eyeSlash from '../assets/eye-slash.png';
import { GoogleSignInButton } from '../signInButton/GoogleSignInButton';
import { connect } from 'react-redux';
import { LoginData, setIsLoggedIn } from '../redux/action';
import { Action, Dispatch } from 'redux';

interface Props {
    setIsLoggedIn: (data: LoginData) => void;
}

export const Login = ({ setIsLoggedIn }: Props) => {
    const [login, setLogin] = useState('');
    const [currentPassword, setCurrentPassword] = useState('12345678');
    const [visibleCurrentPassword, setVisibleCurrentPassword] = useState(false);

    return (
        <>
            <Header headerType={HeaderType.LOGIN}/>
            <Navigation pageType={PageType.LOGIN}/>
            <div className='modal-window'>
                <div className='modal-window-title'>
                    Вход
                </div>

                <div className='inputs'>
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
                    <div className='row eyeSlash'>
                        <label htmlFor="currentPassword">Пароль</label>
                        <input
                            id='currentPassword'
                            className='profile-input currentPassword'
                            type={`${visibleCurrentPassword ? 'text' : 'password'}`}
                            name='currentPassword'
                            value={currentPassword}
                            placeholder='Введите пароль'
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                        {!visibleCurrentPassword && <img
                            src={eyeSlash}
                            className='eyeSlash-icon currentPassword'
                            alt='eyeSlash'
                            onClick={() => setVisibleCurrentPassword(true)}
                        />}
                    </div>
                </div>

                <div className='buttons'>
                    <button className='login login-button' onClick={() => setIsLoggedIn({isLoggedIn: true})}>Вход
                    </button>
                    <GoogleSignInButton setIsLoggedIn={setIsLoggedIn}/>
                </div>

            </div>
            <Footer/>
        </>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    setIsLoggedIn: (payload: LoginData) => dispatch(setIsLoggedIn(payload))
})

export default connect(null, mapDispatchToProps)(Login)