import Axios from 'axios'

// Read token from localStorage
const token = localStorage.getItem('access_token')

export default Axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
        'Accept': 'application/json'
    }
})