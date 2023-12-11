import { axiosInstanceAPI } from "../config/axios";
import { StoreBond } from "../types/type";
import Cookies from "js-cookie";
class BondService {
    async index() {
        try {
        const response = await axiosInstanceAPI.get('user/bond')

        return response.data

        } catch (err: unknown) {
        console.log(err);
        }
    }

    async create({ user_to_id, user_to_role_id }: StoreBond) {
        try {
            const token = Cookies.get('auth_token') || '';            

            const res = axiosInstanceAPI.post('user/bond', {
                user_to_id,
                user_to_role_id
            }, { headers: { Authorization: `Bearer ${token}` }});

            return res;
        } catch (err: unknown) {
            console.log(err);
        }
    }
}

export default new BondService();