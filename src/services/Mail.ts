import { Mail } from "../types/type";
import { axiosInstanceAPI } from "../config/axios";

class MailService {
    async send({ email, urlContext }: Mail) {
        try {
            const res = await axiosInstanceAPI.post('users/mail/send', { email, urlContext });

            return res;
        } catch (err: unknown) {
            console.log(err);
        }
    }
 
    async resend({ email, urlContext }: Mail) {
        try {
            const res = await axiosInstanceAPI.post('auth/mail/resend', { email, urlContext });
            return res;
        } catch (err: unknown) {
            console.log(err)
        }
    }

    async verify({ token }: Mail) {
        try {
            const res = await axiosInstanceAPI.get(`users/mail/verify/${token}`);

            return res;
        } catch (err: unknown) {
            console.log(err)
        }
    }
}

export default new MailService();