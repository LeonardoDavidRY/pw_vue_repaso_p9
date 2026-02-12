<template>
  <div class="tabla">
    <h2>Lista de Estudiantes</h2>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Cédula</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estudiante in estudiantes" :key="estudiante.id">
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ estudiante.cedula }}</td>
          <td>
            <button @click="visualizarEstudiante(estudiante)">
              Visualizar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="estudiantes.length === 0" class="no-data">
      No hay estudiantes registrados
    </p>
  </div>
</template>

<script>
export default {
  name: "EstudianteTabla",
  props: {
    estudiantes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    visualizarEstudiante(estudiante) {
      // Buscar el enlace con rel="self" en el array de links
      const enlaceSelf = estudiante.links?.find(link => link.rel === "self");
      const href = enlaceSelf?.href || null;

      console.log("Estudiante completo:", estudiante);
      console.log("Links disponibles:", estudiante.links);
      console.log("Enlace self encontrado:", href);

      this.$emit("estudianteSeleccionado", {
        estudiante: estudiante,
        enlace: href,
      });
    },
  },
};
</script>

<style scoped>
.tabla {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
h2 {
  color: #0066df;
  text-align: center;
  margin-bottom: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
th {
  background-color: #f5f5f5;
  font-weight: bold;
  color: #333;
}
tr:hover {
  background-color: #f9f9f9;
}
button {
  background-color: #0066df;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}
button:hover {
  background-color: #004bb5;
}
.no-data {
  text-align: center;
  color: #666;
  margin-top: 20px;
  font-style: italic;
}
</style>