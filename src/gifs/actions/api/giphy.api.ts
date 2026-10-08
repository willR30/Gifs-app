//eso va a ser una instancia para llgar a gipy developer para evitar duplicar  codigo
//esta es la base de la url , con los parametros en comin

import axios from "axios";

export const GiphyApi = axios.create(
 {
    baseURL: 'https://api.giphy.com/v1/stickers',
    params :{
        lang: 'es',
        api_key: import.meta.env.VITE_GIFPY_API_KEY
    }

 }   
)