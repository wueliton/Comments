import axios from "axios";

export const ApiService = new axios.create({
  //Definir a base URL do backend (json-server)
  baseUrl: "",
});
