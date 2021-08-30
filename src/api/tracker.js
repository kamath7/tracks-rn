import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const instance = axios.create({
  baseURL: "https://tracks-backend.herokuapp.com",
});

instance.interceptors.request.use(
  (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
); //executed before sending a request to the above URL
//1st func auto called, 2nd func err with the req
export default instance;
