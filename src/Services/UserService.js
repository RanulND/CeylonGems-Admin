import axios from "./ApiService";

export const getUsers = () => axios.get('admin/get-users')