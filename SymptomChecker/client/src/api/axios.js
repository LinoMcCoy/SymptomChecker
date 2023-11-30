import axios from 'axios';
//import { register } from '../user'

const instance = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "/api": "http://localhost:5000",
    withCredentials: true,
})

export default instance;

//export const registerRequest = user => instance.post("/register", user)
//export const loginRequest = user => instance.post("/login", user)