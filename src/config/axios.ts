import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get('auth_token') || '';

export const axiosInstanceAPI = axios.create({
  baseURL: "http://localhost:7000/api/v1/",
  headers: { Authorization: `Bearer ${token}` }
})