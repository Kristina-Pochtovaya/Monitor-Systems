import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { LoginData } from '../redux/action';

interface Props {
    setIsLoggedIn: (data: LoginData) => void;
}

export const GoogleSignInButton = ({setIsLoggedIn}: Props) => {

    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <GoogleLogin
                onSuccess={() => setIsLoggedIn({isLoggedIn: true})}
                onError={() => console.log('error')}
                text="signin_with"
                locale='ru'
                width='400px'
            />
        </GoogleOAuthProvider>
    )
};
