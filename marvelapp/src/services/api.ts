import axios from "axios";

const api = axios.create({
  // Substituir o endereço abaixo pelo ip da sua máquina
  baseURL: "http://192.168.5.7:3333",
});

export default api;