import React, { useState } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import { Header } from '../header/Header';
import { Navigation, PageType } from '../navigation/Navigation';
import { Footer } from '../footer/Footer';
import { ProfileName } from './ProfileName';
import { ProfilePersonalData } from './ProfilePersonalData';
import { ProfileContacts } from './ProfileContacts';
import { ProfilePassword } from './ProfilePassword';
import { ProfileData, updateProfileDate } from '../redux/action';
import { Action, Dispatch } from 'redux';

interface Props {
    name: string,
    surname: string,
    patronymic: string,
    login: string,
    idNum: string,
    email: string,
    mobile: string,
    currentPassword: string,
    updateProfileDate: (data: ProfileData) => void,
}

export const Profile = (props: Props) => {
    const {name, surname, patronymic, login, idNum, email, mobile, currentPassword, updateProfileDate} = props;

    const [inputName, setInputName] = useState(name);
    const [inputSurname, setInputSurname] = useState(surname);
    const [inputPatronymic, setInputPatronymic] = useState(patronymic);
    const [inputIdNum, setInputIdNum] = useState(idNum);
    const [inputLogin, setInputLogin] = useState(login);
    const [inputEmail, setInputEmail] = useState(email);
    const [inputMobile, setInputMobile] = useState(mobile);
    const [inputCurrentPassword, setInputCurrentPassword] = useState(currentPassword);
    const [newPassword, setNewPassword] = useState('12345678');
    const [confirmedNewPassword, setConfirmedNewPassword] = useState('');

    return (
        <>
            <Header/>
            <Navigation pageType={PageType.PROFILE}/>
            <div className='profile-body'>
                <div className='profile-title'>
                    Профиль
                </div>
                <ProfileName name={inputName} surname={inputSurname}/>
                <hr className='line'/>
                <ProfilePersonalData
                    name={inputName}
                    setName={setInputName}
                    patronymic={inputPatronymic}
                    setPatronymic={setInputPatronymic}
                    surname={inputSurname}
                    setSurname={setInputSurname}
                    login={inputLogin}
                    setLogin={setInputLogin}
                    idNum={inputIdNum}
                    setIdNum={setInputIdNum}
                />
                <hr className='line'/>
                <ProfileContacts
                    email={inputEmail}
                    setEmail={setInputEmail}
                    mobile={inputMobile}
                    setMobile={setInputMobile}
                />
                <hr className='line'/>
                <ProfilePassword
                    newPassword={newPassword}
                    setNewPassword={setNewPassword}
                    currentPassword={inputCurrentPassword}
                    setCurrentPassword={setInputCurrentPassword}
                    confirmedNewPassword={confirmedNewPassword}
                    setConfirmedNewPassword={setConfirmedNewPassword}
                />
                <hr className='line'/>
                <button className='save-button'
                        onClick={() =>
                            updateProfileDate({
                                name: inputName,
                                surname: inputSurname,
                                patronymic: inputPatronymic,
                                login: inputLogin,
                                idNum: inputIdNum,
                                mobile: inputMobile,
                                email: inputEmail,
                                currentPassword: inputCurrentPassword,
                            })}
                >
                    Сохранить
                </button>
            </div>
            <Footer/>
        </>
    )
}

const mapStateToProps = (state: { profileData: ProfileData }) => ({
    name: state.profileData.name,
    surname: state.profileData.surname,
    patronymic: state.profileData.patronymic,
    login: state.profileData.login,
    idNum: state.profileData.idNum,
    email: state.profileData.email,
    mobile: state.profileData.mobile,
    currentPassword: state.profileData.currentPassword,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    updateProfileDate: (payload: ProfileData) => dispatch(updateProfileDate(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)