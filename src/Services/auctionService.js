import axios from "./ApiService";

export const getAuctions = () => axios.get('admin/get-auctions')

export const getAuction= (id) => axios.post('admin/get-auction',{id})