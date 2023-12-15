import React, { useState } from 'react';
import './PersonalAccount.css';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { PersonalAccountHeader } from './PersonalAccountHeader';
import search from '../assets/search.png';
import clearFilter from '../assets/clear-filter.png';
import { ActionsMenu } from './ActionsMenu';
import { PersonalAccountData } from './PersonalAccountData';
import { Navigation, PageType } from '../navigation/Navigation';

export const PersonalAccount = () => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <>
            <Header/>
            <Navigation pageType={PageType.PERSONAL_ACCOUNT}/>
            <div className='personalAccount'>
                <PersonalAccountHeader/>
                <div className='personalAccount-body'>
                    <form className='personalAccount-form'>
                        <label htmlFor="search">Выбор ИС/СР для внесения метаданных</label>
                        {searchValue ? null : <img src={search} className='search-icon' alt='search'/>}
                        <div className='input-container'>
                            <input
                                className='input-data'
                                type='text'
                                id="search"
                                name="search input"
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={`${searchValue}`}
                                placeholder="     Выберите ИС/СР для внесения метаданных..."
                            />
                            <button className='button-show'>Показать</button>
                        </div>
                        <img src={clearFilter} alt='clearFilter' className='clearFilter-icon'
                             onClick={() => setSearchValue('')}/>
                    </form>
                    <div className='personalAccount-table'>
                        <ActionsMenu/>
                    </div>
                    <PersonalAccountData/>
                </div>
            </div>
            <Footer/>
        </>
    )
}