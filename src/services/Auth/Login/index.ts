import axios, { AxiosError } from "axios"
import { LoginService, RegisterService } from "../../../types/type";

class AuthService {
/*     async register({ name, email, password, cpf, telephone, birth_day, crm, crm_state, specialty_name, account_type }: RegisterService) {
        try {
            
        } catch (err: unknown) {
            console.log(err);
        }
    } */

    async login(data: LoginService) {
        try {
            const res = await axios.post(
                `http://localhost:7000/api/v1/auth/login`, {
                    email: data.email,
                    password: data.password,
                    role: data.role
                }
            )

            if(res) {
                localStorage.setItem('token', res.data!.data.authorization.token)
                localStorage.setItem('role', res.data!.data.user.role.id)
            }

            return res;
        } catch (err: unknown) {
            console.log(err);
        }
    }

    async logout() {
        try {
            const token = localStorage.getItem('token');
            localStorage.removeItem('token');
            const res = await axios.delete(`http://localhost:7000/api/v1/auth/logout`, { headers: { Authorization: `Bearer ${token}` }});
            return res;
        } catch (err: unknown) {
            console.log(err);
        }
    }
}

export default new AuthService();