const get = async (request) => {
    let query ='?'
    if (request) {
        if(request.description){
            query += `description=${request.description}&`
        }
        if(request.location){
            query += `location=${request.location}&`
        }
        if(request.full_time){
            query += `full_time=${request.full_time}`
        }
        if(request.page){
            query += `page=${request.page}`
        }
    }
    const axios = require('axios');
    const response = await axios.get('https://dev6.dansmultipro.com/api/recruitment/positions.json'+(request && query));
    return response.data
}

const detail = async (id) => {
    const axios = require('axios');
    const response = await axios.get('https://dev6.dansmultipro.com/api/recruitment/positions/'+id);
    return response.data
}

export default {
    get,
    detail,
}