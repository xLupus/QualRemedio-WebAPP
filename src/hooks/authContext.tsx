import Cookies from 'js-cookie';

export const useAuthContext = () => {
    const currentUser = Cookies.get('auth_token');

    if(currentUser?.length === 0) {
        return;
    }

    return currentUser;
};