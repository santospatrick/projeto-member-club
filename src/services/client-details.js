import { apiConfig } from "./api-config";

const MENSAGEM_CLIENTE_NAO_ENCONTRADO = 'Cliente não foi encontrado, tente outro ID!'

export async function getClientDetails({ id }) {
    if (!id) {
        throw new Error('ID is required');
    }

    try {
        const url = `${apiConfig.baseURL}/clients/${id}`;
        
        const response = await fetch(url)
        const data = await response.json();

        if (!data.id) {
            throw new Error(MENSAGEM_CLIENTE_NAO_ENCONTRADO)
        }

        alert('Cliente encontrado!')

        return data;
    } catch (error) {
        console.log(error)
        alert(MENSAGEM_CLIENTE_NAO_ENCONTRADO)
        throw new Error(MENSAGEM_CLIENTE_NAO_ENCONTRADO)
    }
}