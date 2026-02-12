import axios from 'axios';

const API_URL = 'http://localhost:8081/repaso/api/v1.0/pacientes';

const guardar = async (paciente) => {
    return axios.post(`${API_URL}/`, paciente, {
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

const buscarPorCedula = async (cedula) => {
    return axios.get(`${API_URL}/buscar/${cedula}`).then(resp => resp.data);
}

export const guardarPaciente = async (paciente) => {
    return await guardar(paciente);
}

export const consultarTodosPacientes = async () => {
    return await consultarTodos();
}

export const buscarPacientePorCedula = async (cedula) => {
    return await buscarPorCedula(cedula);
}
