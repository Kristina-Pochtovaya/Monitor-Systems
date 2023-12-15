import { ActionTypeLogin, ActionTypeProfileData, LoginData, ProfileData } from './action';

const initialStateProfileData = {
    name: 'Имя',
    surname: 'Фамилия',
    patronymic: '',
    login: '',
    idNum: '1234455PB88',
    email: 'agsr@mail.ru',
    mobile: '+375 29 123 44 55',
    currentPassword: '12345678',
};

const initialStateLogin = {
    isLoggedIn: false,
};

export interface ActionsProfileData {
    type: ActionTypeProfileData,
    payload: ProfileData,
}

export interface ActionsLogin {
    type: ActionTypeLogin,
    payload: LoginData,
}

export const profileData = (state: ProfileData = initialStateProfileData, action: ActionsProfileData) => {
    switch (action.type) {
        case ActionTypeProfileData.UPDATE_PROFILE_DATA: {
            const {name, surname, patronymic, login, idNum, email, mobile, currentPassword} = action.payload;

            return {
                ...state,
                name: name || state.name,
                surname: surname || state.surname,
                patronymic: patronymic || state.patronymic,
                login: login || state.login,
                idNum: idNum || state.idNum,
                email: email || state.email,
                mobile: mobile || state.mobile,
                currentPassword: currentPassword || state.currentPassword,
            }
        }
        default:
            return state
    }
}

export const login = (state: LoginData = initialStateLogin, action: ActionsLogin) => {
    switch (action.type) {
        case ActionTypeLogin.LOGGED_IN: {
            return {...state, isLoggedIn: true}
        }
        default: {
            return state;
        }
    }
}