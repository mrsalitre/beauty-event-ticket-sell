<template>
  <footer class="bg-black text-white text-center py-4">
    <div class="container mx-auto">
      <a href="#">Aviso Legal</a>
      <span>&nbsp;-&nbsp;</span>
      <a href="#">Política de privacidad</a>
      <span>&nbsp;-&nbsp;</span>
      <a href="#">Política de cookies</a>
      <p class="inline-block">
        &nbsp;&copy; {{ year }} Cristina Gens, Todos los derechos reservados
      </p>
      <br />
      <p>Made with &hearts; by Coco Solution</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
