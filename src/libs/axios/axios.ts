import axios from "axios";
import { API_DOMAIN } from "../../config";

const instance = axios.create({
  baseURL: API_DOMAIN,
});

export const getAxios = () => {
  return instance;
};
