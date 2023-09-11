import axios from 'axios';

const API_URL ="";

export const saveInvoice = async (payload) => {
    try{
        await axios.post( '${API_URL}/invoice', payload);
    }catch (error){
        console.log('Error: ', error.message);
        return error.response.data;
    }
}