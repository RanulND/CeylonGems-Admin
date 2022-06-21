import axios from './ApiService'

export const getOrdersByDate = () => axios.get('order/getOrdersByDate')

export const getAllOrders = () => axios.get('order/getAllOrders')

export const getOrder = (id) => axios.get(`order/order/${id}`)