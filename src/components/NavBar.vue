<template>
  <div class="navbar">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/doctor">Crear Doctor</router-link> |
      <router-link to="/paciente">Crear Paciente</router-link> |
      <router-link to="/citas">Agendar Citas</router-link> |
      <router-link to="/estudiante">Estudiante</router-link> |
      <router-link to="/token">Token</router-link>
    </nav>
  </div>
</template>

<style scoped> 
.navbar {
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>