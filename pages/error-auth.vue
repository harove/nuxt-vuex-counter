<template>
  <div>
    <v-row>
      <v-col class="col-12 col-md-8">
        <h1>No tienes permisos para ver el contenido</h1>
      </v-col>

      <div class="error-desc col-md-8">
        <p>
          Lo sentimos, la página que buscas aún no existe o ya no se encuentra
          disponible.
        </p>
        <p>Para resolver este error te sugerimos:</p>
        <ul class="mb-6">
          <li>
            Comprobar que la dirección (URL) sea la correcta
          </li>
          <li>
            Realizar una nueva búsqueda
          </li>
          <li>
            Ir al centro de ayuda
          </li>
        </ul>

        <button class="primary">
            Volver al Inicio
        </button>
      </div>
      <v-col class="col-md-4 d-flex justify-center">
        <img src="/testErrorPage.jpg" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
    button{
        padding: 10px 40px;
    }
</style>

