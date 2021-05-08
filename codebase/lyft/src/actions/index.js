import { ADD_USER } from "../constants/index";

export function addUser(payload) {
  return { type: ADD_USER, payload }
};