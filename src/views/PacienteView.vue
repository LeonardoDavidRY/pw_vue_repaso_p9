<template>
  <div class="paciente-view">
    <PacienteFormulario />
  </div>
</template>

<script>
import PacienteFormulario from "@/components/PacienteFormulario.vue";

export default {
  name: "PacienteView",
  components: {
    PacienteFormulario,
  },
};
</script>

<style scoped>
.paciente-view {
  padding: 20px;
}
</style>
