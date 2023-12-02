import axios from "axios";

class Bond {
  async index() {
    const request_headers = {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOnsiaWQiOjIsIm5hbWUiOiJEb2N0b3IiLCJkZXNjcmlwdGlvbiI6IkNvbmNlZGUgcGVybWlzc8OjbyBwYXJhIG8gY2FyZ28gZGUgZG91dG9yIn0sImlhdCI6MTcwMTM4NTQxNSwiZXhwIjoxNzAxNjQ0NjE1fQ.j7szrEv4AY5lk427hNUguAE1PoXO5tzdVnE1BLDbsWk"
      }
    }

    try {
      const response = await axios.get('http://localhost:8080/api/v1/user/bond', request_headers)

      return response.data
      
    } catch (err: unknown) {
      console.log(err);
    }
  }
}

export default new Bond()