import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PersonalAccount } from './personalAccount/PersonalAccount';
import { MainPage } from './mainPage/MainPage';
import Profile from './profile/Profile';
import Login from './login/Login';
import { connect}  from 'react-redux';
import { LoginData } from './redux/action';

interface Props {
    isLoggedIn: boolean;
}

export const App = ({isLoggedIn}: Props) => {
    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    {
                        isLoggedIn ? (<>
                                <Route path='/' element={<MainPage/>}/>
                                <Route path='/personal-account' element={<PersonalAccount/>}/>
                                <Route path='/profile' element={<Profile/>}/>
                                <Route path='*' element={<Navigate to='/' replace/>}/>
                            </>) :
                            (<>
                                <Route path='/login' element={<Login/>}/>
                                <Route path='*' element={<Navigate to='/login' replace/>}/>
                            </>)
                    }
                </Routes>
            </BrowserRouter>
        </div>
    );
}

const mapStateToProps = (state: { login: LoginData }) => ({
    isLoggedIn: state.login.isLoggedIn,
});

export default connect(mapStateToProps)(App)