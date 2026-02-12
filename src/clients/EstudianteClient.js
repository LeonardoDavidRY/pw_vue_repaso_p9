import axios from 'axios';

const API_URL = 'http://localhost:8081/repaso/api/v1.0/estudiantes';

const guardar = async (estudiante, token) => {
    // Limpiar el token de espacios y saltos de línea
    const cleanToken = token.trim();
    
    console.log('Token siendo enviado:', cleanToken.substring(0, 50) + '...'); // Debug
    
    return axios.post(`${API_URL}/guardar`, estudiante, {
        headers: {
            "Authorization": `Bearer ${cleanToken}`,
            "Content-Type": "application/json"
        }
    }).then(resp => resp.data)
    .catch(error => {
        console.error('Error en la petición:', error.response?.status);
        console.error('Headers enviados:', error.config?.headers);
        throw error;
    });
}

const consultarTodos = async () => {
    return axios.get(`${API_URL}/todos`).then(resp => resp.data);
}

const buscarPorCedula = async (cedula) => {
    return axios.get(`${API_URL}/buscar/${cedula}`).then(resp => resp.data);
}

export const guardarFac = async (token, estudiante) => {
    return await guardar(estudiante, token);
}

export const consultarTodosFac = async () => {
    return await consultarTodos();
}

export const buscarPorCedulaFac = async (cedula) => {
    return await buscarPorCedula(cedula);
}