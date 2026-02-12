import axios from 'axios';

const API_URL = 'http://localhost:8081/repaso/api/v1.0/doctores';

const guardar = async (doctor) => {
    return axios.post(`${API_URL}/`, doctor, {
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

export const guardarDoctor = async (doctor) => {
    return await guardar(doctor);
}

export const consultarTodosDoctores = async () => {
    return await consultarTodos();
}

export const buscarDoctorPorCedula = async (cedula) => {
    return await buscarPorCedula(cedula);
}
