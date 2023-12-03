export const useAuthContext = () => {
    const token = localStorage.getItem('token');

    if(token?.length === 0) {
        return;
    }

    return token;
};