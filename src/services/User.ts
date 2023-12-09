import { AxiosError } from "axios"
import { axios_instance } from "../config/axios"

export interface UserData {
  id: number,
  name: string,
  email: string,
  cpf: string,
  birth_day: string,
  telephone: string,
  profile?: {
    bio: string
  }
}

class User {
  async show(user_id: number) {
    try {
      const response = await axios_instance.get(`users/${user_id}`)

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }
    }
  }

  async updateProfile(user_id: number, data: UserData) {
    try {
      const response = await axios_instance.patch(`users/${user_id}`, data)
      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }
    }
  }

  async changePassword(user_id: number, current_password: string, new_password: string) {
    try {
      const form_data = {
        new_password,
        current_password
      }

      const response = await axios_instance.patch(`users/${user_id}/password`, form_data)

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }
    }
  }

  async deleteAccount(user_id: number) {
    try {
      const response = await axios_instance.delete(`users/${user_id}`)

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }
    }
  }
}

export default new User()