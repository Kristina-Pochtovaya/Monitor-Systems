import { NavLink } from 'react-router-dom';
import './PersonalAccount.css';

export const PersonalAccountHeader = () => {
    return (
        <div className='personalAccount-header'>
            <div className='title'>Личный кабинет</div>
            <div className='menu'>
                <NavLink className='selected' to={'/registries'}> Реестры </NavLink>
                <NavLink to={'/services'}> Электронные сервисы </NavLink>
                <NavLink to={'/data'}> Потребление данных </NavLink>
                <NavLink to={'/references'}> Справочники </NavLink>
                <NavLink to={'/reports'}> Отчеты </NavLink>
            </div>
        </div>)
}
