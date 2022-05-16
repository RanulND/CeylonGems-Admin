import axios from "./ApiService";

export const getGemCount = (id) => axios.post('gem/gem-count-by-id', { id })