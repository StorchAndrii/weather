import axios from "axios";

const baseService = axios.create({
  baseURL: "http://api.weatherapi.com",
});

export default baseService;
