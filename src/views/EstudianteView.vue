<template>
  <EstudianteFormulario @estudianteGuardado="actualizarTabla" />
  <EstudianteTabla
    v-if="mostrarTabla"
    :estudiantes="estudiantes"
    @estudianteSeleccionado="manejarEstudianteSeleccionado"
  />
</template>

<script>
import EstudianteTabla from "@/components/EstudianteTabla.vue";
import EstudianteFormulario from "@/components/EstudianteFormulario.vue";
import { consultarTodosFac } from "@/clients/EstudianteClient";

export default {
  name: "EstudianteView",
  components: {
    EstudianteTabla,
    EstudianteFormulario,
  },
  data() {
    return {
      estudiantes: [],
      mostrarTabla: true,
    };
  },
  async mounted() {
  
    await this.cargarEstudiantes();
  },
  methods: {
    async cargarEstudiantes() {
      try {
        this.estudiantes = await consultarTodosFac();
        this.mostrarTabla = this.estudiantes.length > 0;
        console.log("Estudiantes cargados:", this.estudiantes);
      } catch (error) {
        console.error("Error al cargar estudiantes:", error);
      }
    },
    async actualizarTabla() {
      
      await this.cargarEstudiantes();
    },
    manejarEstudianteSeleccionado(data) {
      const { estudiante, enlace } = data;
      console.log("Estudiante seleccionado:", estudiante);
      console.log("Enlace HATEOAS:", enlace);

     

      if (enlace) {
       
        console.log(`Podrías hacer GET a: ${enlace}`);
      }
    },
  },
};
</script>