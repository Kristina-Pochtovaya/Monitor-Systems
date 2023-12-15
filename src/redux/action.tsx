export enum ActionTypeProfileData {
    UPDATE_PROFILE_DATA = 'updateProfileData',
}

export enum ActionTypeLogin {
    LOGGED_IN = 'loggedIn'
}

export interface ProfileData {
    name: string,
    surname: string,
    patronymic: string,
    login: string,
    idNum: string,
    email: string,
    mobile: string,
    currentPassword: string,
}

export interface LoginData {
    isLoggedIn: boolean;
}

export const updateProfileDate = (profileData: ProfileData) => {
    return {
        type: ActionTypeProfileData.UPDATE_PROFILE_DATA,
        payload: profileData,
    }
}

export const setIsLoggedIn = (login: LoginData) => {
    return {
        type: ActionTypeLogin.LOGGED_IN,
        payload: login,
    }
}