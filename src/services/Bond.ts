import { axios_instance } from "../config/axios";

class Bond {
  async index() {
    try {
      const response = await axios_instance.get('user/bond')

      return response.data

    } catch (err: unknown) {
      console.log(err);
    }
  }
}

export default new Bond()