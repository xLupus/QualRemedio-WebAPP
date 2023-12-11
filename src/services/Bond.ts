import { axiosInstanceAPI } from "../config/axios";
import Cookies from 'js-cookie'

interface indexProps {
  filter?: {
    status?: number
  }
}

class Bond {
  async index(props?: indexProps) {
    const query_params = []
    const filter_params = []

    if (props) {
      const { filter } = props
      
      if (filter) {
        const { status } = filter

        if (status) {
          filter_params.push(`status:${status}`)
        }

        query_params.push(`filter=${filter_params.join(',')}`)

      }
    }

    const query_string = query_params.join('&')

    try {
      const response = await axiosInstanceAPI.get(
        `user/bond?${query_string}`,
        { headers: { Authorization: `Bearer ${Cookies.get('auth_token')}` } }
      )

      return response.data

    } catch (err: unknown) {
      console.log(err);
    }
  }
}

export default new Bond()