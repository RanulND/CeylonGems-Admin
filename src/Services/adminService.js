import axios from "./ApiService"

export const removeAdmin = (id) => axios.post('admin/remove-admin', { id })

export const addAdmin = (data) => axios.post('admin/add-admins', data)

export const getAdmins = () => axios.get('admin/get-admins')

export const counts = () => axios.get('admin/get-count')

export const signIn = (data) => axios.post('auth/admin/signin', data)