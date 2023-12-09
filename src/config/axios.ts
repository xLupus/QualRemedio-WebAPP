import axios from "axios";

export const axiosInstanceAPI = axios.create({
  baseURL: "http://localhost:7000/api/v1/",
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOnsiaWQiOjIsIm5hbWUiOiJEb2N0b3IiLCJkZXNjcmlwdGlvbiI6IkNvbmNlZGUgcGVybWlzc8OjbyBwYXJhIG8gY2FyZ28gZGUgZG91dG9yIn0sImlhdCI6MTcwMTY1MjI2MywiZXhwIjoxNzAxOTExNDYzfQ.bjf-GUPQM-fcl4Zb_Zau8XIZHsdi9jdUewfhd02VRaE",
  }
})