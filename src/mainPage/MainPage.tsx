import React from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Navigation, PageType } from '../navigation/Navigation';

export const MainPage = () => {
    return (
        <>
            <Header/>
            <Navigation pageType={PageType.MAIN}/>
            <Footer/>
        </>
    )
}