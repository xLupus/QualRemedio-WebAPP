import Cookies from 'js-cookie';

export const useAuthContext = () => {
    const currentUser = {
        user_id: Cookies.get('user_id'),
        user_role: Cookies.get('user_role'),
        auth_token: Cookies.get('auth_token')
    };

    if(!Object.entries(currentUser)[1][1]) return;

    return currentUser;
};