// valorantAgences.js

import axios from "axios";

const valorantAgence = async (language = 'pt-BR') => {
    const URL_API = `https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=${language}`;
    try {
        const response = await axios.get(URL_API);
        return response.data;
    }catch (error) {
        throw error;
    }
}

export default valorantAgence;
