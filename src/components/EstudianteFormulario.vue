<template>
  <div class="formulario">
    <h2>Estudiante</h2>
    <div class="form">
      <label for="token">Token</label>
      <p><textarea name="token" id="token" v-model="token"></textarea></p>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" v-model="nombre" />
      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" name="apellido" v-model="apellido" />
      <label for="cedula">Cédula:</label>
      <input type="text" id="cedula" name="cedula" v-model="cedula" />
    </div>
    <button @click="guardar">Guardar</button>
  </div>
</template>

<script>
import { guardarFac } from "@/clients/EstudianteClient";
export default {
  data() {
    return {
      token: "",
      nombre: "",
      apellido: "",
      cedula: "",
      mostrar: false,
    };
  },
  methods: {
    async guardar() {
      try {
        const estudiante = {
          nombre: this.nombre,
          apellido: this.apellido,
          cedula: this.cedula,
        };
        const respuesta = await guardarFac(this.token, estudiante);
        console.log("Estudiante guardado:", respuesta);

        // Limpiar el formulario después de guardar exitosamente
        this.limpiarFormulario();

        // Emitir evento para actualizar la tabla
        this.$emit("estudianteGuardado");
      } catch (error) {
        console.error("Error al guardar el estudiante:", error);
        // Aquí podrías agregar un mensaje de error para el usuario
      }
    },
    limpiarFormulario() {
      this.token = "";
      this.nombre = "";
      this.apellido = "";
      this.cedula = "";
    },
  },
};
</script>

<style scoped>
.formulario {
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
h2 {
  color: #0066df;
  text-align: center;
  margin-bottom: 20px;
}
</style>