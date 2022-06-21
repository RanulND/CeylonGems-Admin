import axios from "./ApiService";

export const getUsers = () => axios.get('admin/get-users')

export const getUser = (id) => axios.post('admin/get-user',{id})

export const getUsersByDate = () => axios.get('user/getUsersByDate')