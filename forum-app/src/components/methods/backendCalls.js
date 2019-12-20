// import backendPort from '../../../../config/ports';
const axios = require('axios');

const headers = {
    'cache-control': 'no-cache',
    Connection: 'keep-alive',
    'Content-Length': '51',
    'Accept-Encoding': 'gzip, deflate',
    Host: 'localhost:8000',
    'Cache-Control': 'no-cache',
    Accept: '*/*',
    'User-Agent': 'PostmanRuntime/7.20.1',
    'Content-Type': 'application/x-www-form-urlencoded'
};


module.exports = {
    post: data => {
        const options = {
            method: 'POST',
            url: "http://localhost:8000/posts",
            headers,
            data
        };
        axios(options)
        .catch(er => console.log(er))
    },
    getAll: () => {
        return axios.get('http://localhost:8000/allposts')
        .then(({data}) => {
            return(data)
        })
        .catch(error => console.log(error))
    },
    deletePost: id => {
        axios({
            url: 'http://localhost:8000/posts',
            method: 'delete',
            headers,
            data: id
        })
    }
}