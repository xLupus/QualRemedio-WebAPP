import { axiosInstanceAPI } from "../config/axios";
import Cookies from 'js-cookie'

class Specialty {
  async index() {
    
    try {
      const response = await axiosInstanceAPI.get(
        'specialties',
        { headers: { Authorization: `Bearer ${Cookies.get('auth_token')}` } }
      )

      return response.data

    } catch (err: unknown) {
      console.log(err);
    }
  }
}

export default new Specialty()