import axios from "axios";

export const axios_instance = axios.create({
  baseURL: "http://localhost:8081/api/v1/",
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOnsiaWQiOjIsIm5hbWUiOiJEb2N0b3IiLCJkZXNjcmlwdGlvbiI6IkNvbmNlZGUgcGVybWlzc8OjbyBwYXJhIG8gY2FyZ28gZGUgZG91dG9yIn0sImlhdCI6MTcwMTY0Nzk2MSwiZXhwIjoxNzAxOTA3MTYxfQ.AGPxOLxZYW-UxCWW_Yaeav12yCARX2IeO2CYo3MOv8M",
  }
})