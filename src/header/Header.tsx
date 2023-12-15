import headerLogin from '../assets/header-login.png';
import header from '../assets/header.png';
import './Header.css';

export enum HeaderType  {
    LOGIN = 'login',
}

interface Props  {
    headerType?: HeaderType;
}

export const Header = ({ headerType }: Props) => {
    return <div className='header'>
        {headerType ?
            <img className='header-icon' src={headerLogin} alt='headerLogin'/> :
            <img className='header-icon' src={header} alt='header'/>
        }
    </div>
};