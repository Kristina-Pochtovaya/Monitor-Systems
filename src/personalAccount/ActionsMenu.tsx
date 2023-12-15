import React from 'react';
import view from '../assets/view.png';
import info from '../assets/info.png';
import add from '../assets/add.png';
import grid from '../assets/grid.png';
import vector from '../assets/Vector.svg';
import './ActionsMenu.css';

export const ActionsMenu = () => {
    return (
        <>
            <div className='actions-menu'>
                <div className='actions-menu-left'>
                    <button className='button-view'>
                        <img src={view} alt='view' className='view-icon'/>
                        Просмотр ИС
                    </button>
                    <button className='button-info'>
                        <img src={info} alt='info' className='info-icon'/>
                        Доп сведения ИС/ИР
                    </button>
                    <button className='add-button'>
                        <img src={add} alt='add' className='add-icon'/>
                        Добавить
                    </button>
                </div>
                <div className='actions-menu-right'>
                    <img src={grid} alt='grid' className='grid-icon'/>
                    <div className='line-spacing'>
                        <img src={vector} alt='line-spacing' className='line-spacing-icon'/>
                    </div>
                </div>
            </div>
        </>
    )
}