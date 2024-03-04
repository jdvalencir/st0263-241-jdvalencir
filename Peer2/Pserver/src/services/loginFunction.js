const axios = require("axios"); 
const path = require("path")
require('dotenv').config();

const BASE_URL = process.env.CENTRAL_SERVER_IP;
const SERVER_ADDRESS = process.env.PSERVER_PEER_IP ;

const loginFunction = async (fileIndex) => { 
    try { 
        console.log(`${BASE_URL}/api/v1/pserver_login`);
        const result = await axios.post(`${BASE_URL}/api/v1/pserver_login`, {
            "ip_address": SERVER_ADDRESS,
            "file_index": fileIndex
        })
        console.log(result.data);
    } catch (error){
        console.error(`Error al notificar al servidor central: ${error.message}`);
    }
}

module.exports = { loginFunction }