import { axios_instance } from "../config/axios";

class Specialty {
  async index() {
    try {
      const response = await axios_instance.get('specialties')

      return response.data

    } catch (err: unknown) {
      console.log(err);
    }
  }
}

export default new Specialty()