import backendPort from "../../../config/ports";
const axios = require('axios');

export const getPosts = async () => {
    try {
        return await axios.get(`localhost:${backendPort}/notes`)
    } catch (error) {
        console.error(error)
    }
}