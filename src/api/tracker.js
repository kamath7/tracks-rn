import axios from 'axios'
export default axios.create({
    baseURL: 'https://tracks-backend.herokuapp.com'
})