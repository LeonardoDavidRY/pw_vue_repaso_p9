import axios from 'axios';

const API_URL = 'http://localhost:8081/repaso/api/v1.0/citas';

const agendar = async (cita) => {
    return axios.post(`${API_URL}/`, cita, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resp => resp.data)
    .catch(error => {
        console.error('Error en la petición:', error.response?.status);
        throw error;
    });
}

const consultarTodos = async () => {
    return axios.get(`${API_URL}/`).then(resp => resp.data);
}

export const agendarCita = async (cita) => {
    return await agendar(cita);
}

export const consultarTodasCitas = async () => {
    return await consultarTodos();
}
