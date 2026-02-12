<template>
  <div class="tabla-citas">
    <h3>Citas Agendadas</h3>
    <div v-if="citas.length === 0" class="sin-datos">
      No hay citas agendadas
    </div>
    <table v-else>
      <thead>
        <tr>
          <th>Nombre Paciente</th>
          <th>Apellido Paciente</th>
          <th>Cédula Paciente</th>
          <th>Fecha Cita</th>
          <th>Nombre Doctor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cita in citas" :key="cita.id">
          <td>{{ cita.nombrePaciente }}</td>
          <td>{{ cita.apellidoPaciente }}</td>
          <td>{{ cita.cedulaPaciente }}</td>
          <td>{{ formatearFecha(cita.fechaHora) }}</td>
          <td>{{ cita.nombreDoctor }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { consultarTodasCitas } from "@/clients/CitaClient";

export default {
  data() {
    return {
      citas: [],
    };
  },
  methods: {
    async cargarCitas() {
      try {
        this.citas = await consultarTodasCitas();
        console.log("Citas cargadas:", this.citas);
      } catch (error) {
        console.error("Error al cargar las citas:", error);
      }
    },
    formatearFecha(fechaHora) {
      if (!fechaHora) return "";
      const fecha = new Date(fechaHora);
      // Formato: MM/DD/YYYY, HH:MM AM/PM
      const mes = String(fecha.getMonth() + 1).padStart(2, '0');
      const dia = String(fecha.getDate()).padStart(2, '0');
      const anio = fecha.getFullYear();
      let horas = fecha.getHours();
      const minutos = String(fecha.getMinutes()).padStart(2, '0');
      const ampm = horas >= 12 ? 'PM' : 'AM';
      horas = horas % 12;
      horas = horas ? horas : 12; // La hora '0' debe ser '12'
      const horasStr = String(horas).padStart(2, '0');
      
      return `${mes}/${dia}/${anio}, ${horasStr}:${minutos} ${ampm}`;
    },
  },
  mounted() {
    this.cargarCitas();
  },
};
</script>

<style scoped>
.tabla-citas {
  padding: 20px;
  border: 2px solid #0066df;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h3 {
  color: #0066df;
  text-align: center;
  margin-bottom: 15px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
}

thead {
  background-color: #0066df;
  color: white;
}

th,
td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background-color: #f5f5f5;
}

.sin-datos {
  text-align: center;
  padding: 20px;
  color: #666;
  font-style: italic;
}

@media (max-width: 768px) {
  table {
    font-size: 12px;
  }
  
  th,
  td {
    padding: 8px;
  }
}
</style>
