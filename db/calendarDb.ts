import axios from "axios";
import { Data } from "./interfaceDb";


export const fetchData = async (url: string): Promise<Data> => {
    try {
        const response = await axios.get<Data>(url);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
};


