import backendPort from "../../../config/ports";
const axios = require('axios');


export const getAllPosts = () => {
    axios.get('http://localhost:8000/allposts')
    .then(function(response) {
        console.log(response.data)
        const {data} = response;
        return data
    })
    .catch(error => console.log(error))
}
