import { getDatabase, ref, onValue, get, child, set} from "firebase/database";

export const getChats = (id) => get(child(ref(getDatabase()), `users/${id}`))

export const updateChats = (id, chats) => set(ref(getDatabase(), 'users/' + id), chats)

export const getExistingChats = () => get(child(ref(getDatabase()), 'users/'))