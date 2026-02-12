<template>
  <div class="doctor-view">
    <DoctorFormulario />
  </div>
</template>

<script>
import DoctorFormulario from "@/components/DoctorFormulario.vue";

export default {
  name: "DoctorView",
  components: {
    DoctorFormulario,
  },
};
</script>

<style scoped>
.doctor-view {
  padding: 20px;
}
</style>
