<template>
  <div class="citas-view">
    <h2>Agendamiento de Citas Médicas</h2>
    <div class="contenedor-componentes">
      <!-- Componente 1: Formulario de agendamiento -->
      <div class="componente-1">
        <CitaFormulario @citaAgendada="actualizarTabla" ref="citaFormulario" />
      </div>
      
      <!-- Componente 2: Lista de citas agendadas -->
      <div class="componente-2">
        <CitaTabla ref="citaTabla" />
      </div>
    </div>
  </div>
</template>

<script>
import CitaFormulario from "@/components/CitaFormulario.vue";
import CitaTabla from "@/components/CitaTabla.vue";

export default {
  name: "CitasView",
  components: {
    CitaFormulario,
    CitaTabla,
  },
  methods: {
    async actualizarTabla() {
      // Cuando se agenda una cita en el componente 1,
      // se actualiza el componente 2 (comunicación entre componentes)
      await this.$refs.citaTabla.cargarCitas();
    },
  },
};
</script>

<style scoped>
.citas-view {
  padding: 20px;
}

h2 {
  color: #0066df;
  text-align: center;
  margin-bottom: 30px;
}

.contenedor-componentes {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
}

.componente-1,
.componente-2 {
  width: 100%;
}
</style>
