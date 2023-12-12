import { axiosInstanceAPI } from "../config/axios";

class Specialty {
  async index() {
    try {
      const response = await axiosInstanceAPI.get('specialties')

      return response.data

    } catch (err: unknown) {
      console.log(err);
    }
  }
}

export default new Specialty()