import { LoginService, RegisterService } from "../types/type";
import Cookies from 'js-cookie';
import { axiosInstanceAPI } from "../config/axios";

class AuthService {
    async register({ name, email, password, cpf, telephone, birth_day, crm, crm_state, specialty_name, account_type }: RegisterService) {
        try {
            const res = await axiosInstanceAPI.post('auth/register', { 
                name,
                email, 
                password,
                cpf,
                telephone,
                birth_day,
                crm,
                crm_state,
                specialty_name,
                account_type 
            });

            ['account_type_selected', 'user_name', 'user_email', 'user_cpf', 'user_telephone', 'user_birth_day', 'user_crm_state', 'user_crm', 'user_specialty_name'].forEach((el) => {
                Cookies.remove(`${el}`);
            });
            
            return res;
        } catch (err: unknown) {
            console.log(err);
        }
    }
 
    async login({ email, password, role }: LoginService) {
        try {
            const expires: number = 3;

            const res = await axiosInstanceAPI.post('auth/login', { email, password, role });

            if(res.status === 200) {
                Cookies.remove('account_type_selected');
                Cookies.set('auth_token', res.data!.data.authorization.token, { expires });
                Cookies.set('user_id', res.data!.data.user.id, { expires });
                Cookies.set('user_role', res.data!.data.user.role.id, { expires });
                Cookies.set('user_name', res.data!.data.user.name, { expires });
            }

            return res;
        } catch (err: unknown) {
            console.log(err)
            return err;
        }
    }

    async logout() {
        try {
            const token: string | undefined = Cookies.get('auth_token');
            const res = await axiosInstanceAPI.delete('auth/logout', { headers: { Authorization: `Bearer ${token}` }});

            if(res.status === 200) ['user_id', 'user_role', 'auth_token'].map((el: string) => Cookies.remove(`${el}`));
            
            return res;
        } catch (err: unknown) {
            console.log(err);
        }
    }
}

export default new AuthService();