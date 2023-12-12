import { AxiosError } from "axios"
import { axiosInstanceAPI } from "../config/axios"

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
  async show(email: string, role: number) {
    try {
      const response = await axiosInstanceAPI.post(`users`, { email, role })

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }
    }
  }

  async updateProfile(user_id: number, data: UserData) {
    try {
      const response = await axiosInstanceAPI.patch(`users/${user_id}`, data)
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

      const response = await axiosInstanceAPI.patch(`users/${user_id}/password`, form_data)

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }
    }
  }

  async deleteAccount(user_id: number) {
    try {
      const response = await axiosInstanceAPI.delete(`users/${user_id}`)

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }
    }
  }
}

export default new User()