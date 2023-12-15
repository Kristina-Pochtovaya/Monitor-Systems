import React from 'react';
import './PersonalAccountPagination.css';
import leftArrow from '../assets/upper-arrow.png'
import leftArrowDoubled from '../assets/upper-arrow-doubled.png';
import rightArrow from '../assets/right-arrow-single.png';
import rightArrowDoubled from '../assets/right-arrow-doubled.png';

export const PersonalAccountPagination = () => {
    return (
        <>
            <div className='pagination'>
                <div className='pagination-content'>
                    <img className='pagination-button' src={leftArrow} alt='leftArrow'/>
                    <img className='pagination-button' src={leftArrowDoubled} alt='leftArrowDoubled'/>
                    <div className='pagination-button active' >1</div>
                    <div className='pagination-button' >2</div>
                    <div className='pagination-button' >3</div>
                    <div className='pagination-button' >4</div>
                    <div className='pagination-button' >5</div>
                    <div className='pagination-button'>...</div>
                    <div className='pagination-button' >10</div>
                    <div className='pagination-button' >11</div>
                    <img className='pagination-button' src={rightArrow} alt='rightArrow'/>
                    <img className='pagination-button' src={rightArrowDoubled} alt='rightArrowDoubled'/>
                </div>
            </div>
        </>
    )
}