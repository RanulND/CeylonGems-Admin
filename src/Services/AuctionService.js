import axios from './ApiService'

export const getAuctionsByDate = () => axios.get('auction/getAuctionsByDate')