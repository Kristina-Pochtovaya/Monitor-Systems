import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import rightArrow from '../assets/right-arrow-nav.png';
import rightArrowBright from "../assets/right-arrow-bright.png";

export enum PageType {
    MAIN = 'main',
    PERSONAL_ACCOUNT = 'personalAccount',
    PROFILE = 'profile',
    LOGIN = 'login',
}

interface Props {
    pageType: PageType;
}

export const Navigation = ({pageType}: Props) => {
    return (
        <>
            <div className='navigation'>
                {pageType === PageType.LOGIN &&
                    <>
                        <img className='navigation-icon' src={rightArrow} alt='rightArrow'/>
                        <NavLink to={'/login'}> Вернуться на главную </NavLink>
                    </>}
                {pageType === PageType.MAIN &&
                    <>
                        <NavLink to={'/personal-account'}> Личный кабинет </NavLink>
                        <NavLink to={'/profile'}> Профиль</NavLink>
                    </>
                }
                {(pageType === PageType.PERSONAL_ACCOUNT || pageType === PageType.PROFILE) &&
                    <>
                        <img className='navigation-icon' src={rightArrow} alt='rightArrow'/>
                        <NavLink to={'/'}> Главная </NavLink>
                        <img className='navigation-icon' src={rightArrowBright} alt='rightArrowBright'/>
                        {pageType === PageType.PERSONAL_ACCOUNT ?
                            <NavLink to={'/personal-account'} className='selected-page'> Личный кабинет </NavLink> :
                            <NavLink to={'/profile'} className='selected-page'> Профиль </NavLink>
                        }
                    </>}
            </div>
        </>
    )
}