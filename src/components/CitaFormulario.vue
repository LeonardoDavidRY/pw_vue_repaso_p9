<template>
  <div class="formulario-cita">
    <h3>Agendar Cita</h3>
    <div class="form">
      <label for="cedulaPaciente">Cédula del Paciente:</label>
      <input type="text" id="cedulaPaciente" name="cedulaPaciente" v-model="cedulaPaciente" />
      
      <label for="cedulaDoctor">Cédula del Doctor:</label>
      <input type="text" id="cedulaDoctor" name="cedulaDoctor" v-model="cedulaDoctor" />
      
      <label for="fechaHora">Fecha y Hora:</label>
      <input type="datetime-local" id="fechaHora" name="fechaHora" v-model="fechaHora" />
    </div>
    <button @click="agendar">Agendar</button>
  </div>
</template>

<script>
import { agendarCita } from "@/clients/CitaClient";

export default {
  data() {
    return {
      cedulaPaciente: "",
      cedulaDoctor: "",
      fechaHora: "",
    };
  },
  methods: {
    async agendar() {
      try {
        const cita = {
          cedulaPaciente: this.cedulaPaciente,
          cedulaDoctor: this.cedulaDoctor,
          fechaHora: this.fechaHora,
        };
        
        await agendarCita(cita);
        console.log("Cita agendada:", cita);

        // Limpiar el formulario
        this.limpiarFormulario();

        // Emitir evento para actualizar la tabla de citas
        this.$emit("citaAgendada");
      } catch (error) {
        console.error("Error al agendar la cita:", error);
        alert("Error al agendar la cita. Verifique que el doctor y paciente existan.");
      }
    },
    limpiarFormulario() {
      this.cedulaPaciente = "";
      this.cedulaDoctor = "";
      this.fechaHora = "";
    },
  },
};
</script>

<style scoped>
.formulario-cita {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid #0066df;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input {
  margin: 10px 0;
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
  margin: 10px 0 5px 0;
  font-weight: bold;
  color: #333;
  text-align: left;
}

h3 {
  color: #0066df;
  text-align: center;
  margin-bottom: 15px;
}
</style>
