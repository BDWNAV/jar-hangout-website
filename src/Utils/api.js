import axios from "axios";

export function getUser() {
  return axios.get("http://91.109.116.52:4055/api/auth/", { withCredentials: true })
}