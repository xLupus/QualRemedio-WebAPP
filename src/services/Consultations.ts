import { AxiosError } from "axios"
import { axiosInstanceAPI } from "../config/axios"

export interface IndexConsultationParams {
  filter?: {
    created_by?: number,
    bond?: number
  },
  paginate?: {
    skip: number,
    take: number
  },

}

export interface CreateConsultationParams {
  reason: string,
  observation: string,
  created_by_user: number,
  created_to_user: number,
  date: string,
  department_id: number,
  consultation_status: number
}

export interface UpdateConsultationParams {
  reason: string,
  observation: string,
  date: string,
  department_id: number,
  consultation_status: number
}

class Consultations {
  async index(params?: IndexConsultationParams) { //TODO - REVER
    const query_params = []
    const filter_params = []

    if (params) {
      const { filter, paginate } = params

      if (filter) {
        const { created_by, bond } = filter //* bond

        if (created_by)
          filter_params.push(`created_by:${created_by}`)

        if (bond)
          filter_params.push(`bond:${bond}`)

        query_params.push(`filter=${filter_params.join(',')}`)
      }

      if (paginate) {
        query_params.push(`skip=${paginate.skip}`)
        query_params.push(`take=${paginate.take}`)
      }
    }

    const query_string = query_params.join('&')

    try {
      const response = await axiosInstanceAPI.get(`consultations?${query_string}`)

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        const response_data = err.response?.data

        return response_data
      }
    }
  }

  async create(bond_id: number, data: CreateConsultationParams) {
    try {
      const response = await axiosInstanceAPI.post(`bond/${bond_id}/consultations`, data)

      return response.data

    } catch (err) {
      console.log(err);
    }
  }

  async show(consultation_id: number) {
    try {
      const response = await axiosInstanceAPI.get(`consultations/${consultation_id}`)

      return response.data
    } catch (err: unknown) {
      console.log(err);
    }
  }

  async update(consultation_id: number, data: UpdateConsultationParams) {
    try {
      const response = await axiosInstanceAPI.patch(`consultations/${consultation_id}`, data)

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }
    }
  }

  async destroy(consultation_id: number) {
    try {
      const response = await axiosInstanceAPI.delete(`consultations/${consultation_id}`)

      return response.data
    } catch (err: unknown) {
      console.log(err);
    }
  }


  async status() {
    try {
      const response = await axiosInstanceAPI.get('consultation_status')

      return response.data
    } catch (err: unknown) {
      console.log(err);
    }
  }
}

export default new Consultations()