import axios from "./ApiService";

export const getGemCount = (id) => axios.post('gem/gem-count-by-id', { id })

export const getNonVerifiedGems = () => axios.get('admin/get-non-verified')