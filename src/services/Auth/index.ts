import axios, { AxiosError } from "axios"
import { LoginService, RegisterService } from "../../types/type";
import Cookies from 'js-cookie';

class AuthService {
/*     async register({ name, email, password, cpf, telephone, birth_day, crm, crm_state, specialty_name, account_type }: RegisterService) {
        try {
            
        } catch (err: unknown) {
            console.log(err);
        }
    } */

    async login(data: LoginService) {
        try {
            const expires: number = 3;

            const res = await axios.post(
                `http://localhost:7000/api/v1/auth/login`, {
                    email: data.email,
                    password: data.password,
                    role: data.role
                }
            )

            if(res.status === 200) {
                Cookies.set('auth_token', res.data!.data.authorization.token, { expires });
                Cookies.set('user_role', res.data!.data.user.role.id, { expires });
            }

            return res;
        } catch (err: unknown) {
            console.log(err);
        }
    }

    async logout() {
        try {
            const token: string | undefined = Cookies.get('auth_token');
            const res = await axios.delete(`http://localhost:7000/api/v1/auth/logout`, { headers: { Authorization: `Bearer ${token}` }});

            if(res.status === 200){
                Cookies.remove('auth_token');
                Cookies.remove('user_role');
            }
            
            return res;
        } catch (err: unknown) {
            console.log(err);
        }
    }
}

export default new AuthService();