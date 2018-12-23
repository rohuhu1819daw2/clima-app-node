const axios = require('axios');




const getLugarLatLng = async(direccion) =>{

    let encodeUrl = encodeURI(direccion); //para evitar errores de espacios en uri

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8`)
    
    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    
    let location =  resp.data.results[0];
    let coors =  location.geometry.location;

            // console.log('Direccion:',location.formatted_address);
            // console.log('Latitud:', coors.lat);
            // console.log('Longitud:',coors.lng);
            //console.log(JSON.stringify( resp.data,undefined,2 )); // para verlo en string, mas estenso y completo, con espacio 2
            //console.log(resp.status);

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports={
    getLugarLatLng
}
