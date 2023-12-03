import axios from "axios";
import { axios_instance } from "../config/axios";

class Specialty {
  async index() {
    const request_headers = {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOnsiaWQiOjIsIm5hbWUiOiJEb2N0b3IiLCJkZXNjcmlwdGlvbiI6IkNvbmNlZGUgcGVybWlzc8OjbyBwYXJhIG8gY2FyZ28gZGUgZG91dG9yIn0sImlhdCI6MTcwMTM4NTQxNSwiZXhwIjoxNzAxNjQ0NjE1fQ.j7szrEv4AY5lk427hNUguAE1PoXO5tzdVnE1BLDbsWk"
      }
    }

    try {
      const response = await axios_instance.get('specialties')

      return response.data

    } catch (err: unknown) {
      console.log(err);
    }
  }
}

export default new Specialty()