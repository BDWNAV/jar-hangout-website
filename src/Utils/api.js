import axios from "axios";

export function getUser() {
  return axios.get("https://api.jarhangout.ml/api/auth/", { withCredentials: true })
}