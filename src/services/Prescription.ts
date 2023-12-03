import axios, { AxiosError } from "axios";

interface PrescriptionStoreData {
  label: string,
  observation: string,
  physical: string | null
}

class Prescription {
  async store(consultation_id: number, data: PrescriptionStoreData, file?: FileList) {
    try {
      const formData = new FormData()

      formData.append('label', data.label.trim())
      formData.append('observation', data.observation.trim())

      if (file)
        formData.append('prescription', file[0])

      if (data.physical?.trim())
        formData.append('physical', data.physical.trim())

      const response = await axios.post(
        `http://localhost:8080/api/v1/consultations/${consultation_id}/prescriptions`,
        formData,
        request_headers
      )

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data

      } else {
        console.log(err);
      }
    }
  }

  async show(consultation_id: number, prescription_id: number) {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/consultations/${consultation_id}/prescriptions/${prescription_id}`,
        request_headers
      )

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }
    }
  }

  async destroy(consultation_id: number, prescription_id: number) {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/consultations/${consultation_id}/prescriptions/${prescription_id}`, request_headers)

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }
    }
  }

  async update(consultation_id: number, prescription_id: number, data: PrescriptionStoreData, file?: FileList) {
    const formData = new FormData()

    formData.append('label', data.label.trim())
    formData.append('observation', data.observation.trim())

    if (file)
      formData.append('prescription', file[0])

    if (data.physical?.trim())
      formData.append('physical', data.physical.trim())

    try {
      const response = await axios.patch(
        `http://localhost:8080/api/v1/consultations/${consultation_id}/prescriptions/${prescription_id}`,
        formData,
        request_headers
      )

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response?.data
      }

      console.log(err);
    }
  }
}

export default new Prescription()