//const axios = require('axios');

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

let getInfo = async(direccion) => {
    
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat,coors.lng);
    
        return `El clima en ${coors.direccion} es de ${temp}`;   

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

    
}

getInfo(argv.direccion)
        .then(mensaje => console.log(mensaje))
        .catch(e=> console.log(e));


//////////////////////no hace falta por el getInfo que sustituye todo 
// lugar.getLugarLatLng(argv.direccion)
//         .then(resp =>{
//             console.log(resp);
//         })
//         .catch(e => console.log(e));

// clima.getClima(41.3850639, 2.1734035)
//         .then(temp => console.log(temp))
//         .catch(e=>console.log(e));