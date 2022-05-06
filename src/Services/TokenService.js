export const getAccessToken = () => localStorage.getItem('CR_access_token')

export const setAccessToken = (token) => {
    localStorage.setItem('CR_access_token', token)
    window.dispatchEvent(new Event('userLoggedIn'))
}

export const removeAccessToken = () => {
    localStorage.removeItem('CR_access_token')
    window.dispatchEvent(new Event('userLoggedOut'))
}

const encode = (token) => token.split('').map(c => c.charCodeAt(0)).map(n => (n + 10).toString(16)).join('')