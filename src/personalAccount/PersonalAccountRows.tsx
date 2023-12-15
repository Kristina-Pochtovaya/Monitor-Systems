import React from 'react';
import book from '../assets/book.png';
import server from '../assets/server.png';
import bookmark from '../assets/bookmark.png';
import rightArrow from '../assets/right-arrow.png';
import './PersonalAccountRows.css';
import personalAccountData from './personalAccountData.json';

export const PersonalAccountRows = () => {
    console.log(personalAccountData)
    return (
        <ul className='table'>
            {personalAccountData.map(row => (
                    <li className='table-row'>
                        <div className='row-tile'>{row.title}</div>
                        <div className='icons'>
                            <div className={`book-icon ${!row.book ? 'zero' : ''}`}>
                                <div className='book'><img src={book} alt='book'/></div>
                                {row.book}
                                <div className='rightArrow'><img src={rightArrow} alt='rightArrow'/></div>
                            </div>
                            <div className={`server-icon ${!row.server ? 'zero' : ''}`}>
                                <div className='server'><img src={server} alt='server'/></div>
                                {row.server}
                                <div className='rightArrow'><img src={rightArrow} alt='rightArrow'/></div>
                            </div>
                            <div className={`bookmark-icon ${!row.bookmark ? 'zero' : ''}`}>
                                <div className='bookmark'><img src={bookmark} alt='bookmark'/></div>
                                {row.bookmark}
                                <div className='rightArrow'><img src={rightArrow} alt='rightArrow'/></div>
                            </div>
                        </div>
                    </li>
                )
            )}
        </ul>
    )
}