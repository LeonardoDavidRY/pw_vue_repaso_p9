<template>
  <div class="formulario">
    <h2>Crear Nuevo Paciente</h2>
    <div v-if="mostrarMensaje" class="mensaje-exito">
      Paciente guardado exitosamente
    </div>
    <div class="form">
      <label for="cedula">Cédula:</label>
      <input type="text" id="cedula" name="cedula" v-model="cedula" />
      
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" v-model="nombre" />
      
      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" name="apellido" v-model="apellido" />
      
      <label for="fechaNacimiento">Fecha de Nacimiento:</label>
      <input type="date" id="fechaNacimiento" name="fechaNacimiento" v-model="fechaNacimiento" />
    </div>
    <button @click="guardar">Guardar</button>
  </div>
</template>

<script>
import { guardarPaciente } from "@/clients/PacienteClient";

export default {
  data() {
    return {
      cedula: "",
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      mostrarMensaje: false,
    };
  },
  methods: {
    async guardar() {
      try {
        const paciente = {
          cedula: this.cedula,
          nombre: this.nombre,
          apellido: this.apellido,
          fechaNacimiento: this.fechaNacimiento,
        };
        
        await guardarPaciente(paciente);
        console.log("Paciente guardado:", paciente);

        // Mostrar mensaje de éxito
        this.mostrarMensaje = true;
        
        // Ocultar mensaje después de 10 segundos
        setTimeout(() => {
          this.mostrarMensaje = false;
        }, 10000);

        // Limpiar el formulario
        this.limpiarFormulario();
      } catch (error) {
        console.error("Error al guardar el paciente:", error);
        alert("Error al guardar el paciente. Verifique los datos.");
      }
    },
    limpiarFormulario() {
      this.cedula = "";
      this.nombre = "";
      this.apellido = "";
      this.fechaNacimiento = "";
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
  width: 100%;
  max-width: 500px;
}

input {
  margin: 10px;
  padding: 10px 5px;
  border: 2px solid #0066df;
  width: 100%;
  border-radius: 5px;
  font-size: 14px;
}

button {
  background-color: #0066df;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #004bb5;
}

input:focus {
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

.mensaje-exito {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .form {
    width: 100%;
  }
}
</style>
