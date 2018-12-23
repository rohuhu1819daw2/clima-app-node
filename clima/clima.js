
const axios = require('axios');

const getClima = async(lat,lng) => {
    //axios...
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=294aa9e29a61ab4e2d0363d3ee94d326`)

    return  resp.data.main.temp;
}


module.exports = {
    getClima
}