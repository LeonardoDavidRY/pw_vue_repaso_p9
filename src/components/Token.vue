<template>
  <div class="token">
    <h1>Token</h1>
    <div class="form">
      <label for="id_usuario">Usuario</label>
      <input type="text" id="id_usuario" v-model="usuario" />
      <label for="id_contraseña">Contraseña</label>
      <input type="password" id="id_contraseña" v-model="contraseña" />
      <label for="id_token">Token</label>
      <p>
        <textarea name="id_token" id="id_token" :value="token" readonly></textarea>
      </p>
      <p v-if="role" class="role-info">Rol: <strong>{{ role }}</strong></p>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>

    <button @click="generarToken">Generar</button>
  </div>
</template>

<script>
import { getTokenFachada } from "@/clients/TokenClient";
export default {
  data() {
    return {
      usuario: "",
      contraseña: "",
      token: "",
      role: "",
      errorMessage: "",
    };
  },
  methods: {
    async generarToken() {
      try {
        this.errorMessage = "";
        this.token = "";
        this.role = "";
        
        const respuesta = await getTokenFachada(this.usuario, this.contraseña);
        
        // Extraer el accessToken de la respuesta
        this.token = respuesta.accessToken;
        this.role = respuesta.role;
      } catch (error) {
        this.errorMessage = "Error al generar el token. Verifica tus credenciales.";
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style scoped>
.token {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 20px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 50%;
}
input,
textarea {
  margin: 10px;
  padding: 10px 5px;
  border: 2px solid #0066df;
  width: 100%;
  border-radius: 5px;
}
textarea {
  height: 100px;
  resize: none;
}
button {
  background-color: #0066df;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #004bb5;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: #004bb5;
}
label {
  margin: 10px;
  font-weight: bold;
  color: #333;
  text-align: left;
}
h1 {
  color: #0066df;
  text-align: center;
  margin-bottom: 20px;
}
.role-info {
  color: #0066df;
  margin: 10px;
  text-align: center;
}
.error-message {
  color: #d32f2f;
  margin: 10px;
  text-align: center;
  font-weight: bold;
}
</style>