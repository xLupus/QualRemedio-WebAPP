import { AxiosError } from "axios";
import { axios_instance } from "../config/axios";

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

      const response = await axios_instance.post(
        `consultations/${consultation_id}/prescriptions`,
        formData,
      )

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        console.log(err);
        return err.response?.data

      } else {
        console.log(err);
      }
    }
  }

  async show(consultation_id: number, prescription_id: number) {
    try {
      const response = await axios_instance.get(
        `consultations/${consultation_id}/prescriptions/${prescription_id}`,
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
      const response = await axios_instance.delete(`consultations/${consultation_id}/prescriptions/${prescription_id}`)

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
      const response = await axios_instance.patch(
        `consultations/${consultation_id}/prescriptions/${prescription_id}`,
        formData,
      )

      return response.data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        console.log(err);
        return err.response?.data
      }

      console.log(err);
    }
  }
}

export default new Prescription()