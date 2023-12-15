import React from 'react';
import './PersonalAccountData.css';
import { PersonalAccountRows } from './PersonalAccountRows';
import { PersonalAccountPagination } from './PersonalAccountPagination';

export const PersonalAccountData = () => {
    return (
        <>
            <div className='header'>
                <div className='title'>Список АИС</div>
                <div className='show'>
                    <div className='show-title'>Показывать по:</div>
                    <button className='show-button'>25</button>
                    <button className='show-button'>50</button>
                    <button className='show-button'>100</button>
                </div>
            </div>
            <PersonalAccountRows/>
            <PersonalAccountPagination/>
        </>
    )
}