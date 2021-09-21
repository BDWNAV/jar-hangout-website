import axios from "axios";
import { apiUrls } from "./utils";

export function getUser() {
  return axios.get(`${apiUrls.development}/api/auth/`, { withCredentials: true })
}

export function kickUser(guildId, userId) {
  return axios.get(`${apiUrls.development}/api/discord/${guildId}/${userId}/kick`, { withCredentials: true });
}

export function makeSuggestion(guildId, userId, suggestion, suggestionTitle) {
  return axios.put(`${apiUrls.development}/api/discord/${guildId}/${userId}/suggestions/${suggestionTitle}`, { guildId: guildId, userId: userId, suggestion: suggestion, suggestionTitle: suggestionTitle }, { withCredentials: true });
}