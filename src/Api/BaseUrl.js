import axios from "axios";
const BaseUrl = axios.create({ baseURL: "https://ecommerce-back-end-production.up.railway.app" });
export default BaseUrl;
