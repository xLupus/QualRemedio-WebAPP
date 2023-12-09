import { AxiosError } from "axios"
import { axiosInstanceAPI } from "../config/axios"
import Cookies from 'js-cookie'

export interface UserData {
  id: number,
  name: string,
  email: string,
  cpf: string,
  birth_day: string,
  telephone: string,
  profile?: {
    bio: string
  },
  role: [
    {
      id: number,
      name: string
    }
  ],
  doctor: [
    id: number,
    crm: string,
    crm_state: string,
    specialty: {
      id: number,
      name: string
    }
  ]
}

class User {
  auth_token = Cookies.get('auth_token')

  async show(user_id: number) {
    try {
      const response = await axiosInstanceAPI.get(
        `users/${user_id}`,
        { headers: { Authorization: `Bearer ${this.auth_token}` } }
      )

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }
    }
  }

  async updateProfile(user_id: number, data: UserData) {
    try {
      const response = await axiosInstanceAPI.patch(
        `users/${user_id}`,
        data,
        { headers: { Authorization: `Bearer ${this.auth_token}` } }
      )

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

      const response = await axiosInstanceAPI.patch(
        `users/${user_id}/password`,
        form_data,
        { headers: { Authorization: `Bearer ${this.auth_token}` } }
      )

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }
    }
  }

  async deleteAccount(user_id: number) {
    try {
      const response = await axiosInstanceAPI.delete(
        `users/${user_id}`,
        { headers: { Authorization: `Bearer ${this.auth_token}` } }
      )

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }
    }
  }
}

export default new User()