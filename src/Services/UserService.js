import axios from "./ApiService";

export const getUsers = () => axios.get('admin/get-users')

export const getUser = (id) => axios.post('admin/get-user',{id})

export const updateGems = (id, data) => axios.put('gem/edit/'+id, data) 