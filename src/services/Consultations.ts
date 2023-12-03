import axios, { AxiosError } from "axios"

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
export const request_headers = {
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOnsiaWQiOjIsIm5hbWUiOiJEb2N0b3IiLCJkZXNjcmlwdGlvbiI6IkNvbmNlZGUgcGVybWlzc8OjbyBwYXJhIG8gY2FyZ28gZGUgZG91dG9yIn0sImlhdCI6MTcwMTM4NTQxNSwiZXhwIjoxNzAxNjQ0NjE1fQ.j7szrEv4AY5lk427hNUguAE1PoXO5tzdVnE1BLDbsWk",
  }
}

export interface CreateConsultationParams {
  reason: string,
  observation: string,
  created_by_user: number,
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

    console.log({ query_params });

    try {
      const response = await axios.get(`http://localhost:8080/api/v1/consultations?${query_string}`, request_headers)

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
      const response = await axios.post(`http://localhost:8080/api/v1/bond/${bond_id}/consultations`, data, request_headers)

      return response.data

    } catch (err) {
      console.log(err);
    }
  }

  async show(consultation_id: number) {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/consultations/${consultation_id}`, request_headers)

      return response.data
    } catch (err: unknown) {
      console.log(err);
    }
  }

  async update(consultation_id: number, data: UpdateConsultationParams) {
    try {
      const response = await axios.patch(`http://localhost:8080/api/v1/consultations/${consultation_id}`, data, request_headers)

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }
    }
  }

  async destroy(consultation_id: number) {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/consultations/${consultation_id}`, request_headers)

      return response.data
    } catch (err: unknown) {
      console.log(err);
    }
  }


  async status() {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/consultation_status', request_headers)

      return response.data
    } catch (err: unknown) {
      console.log(err);
    }
  }
}

export default new Consultations()