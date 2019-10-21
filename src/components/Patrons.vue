<template>
  <section id="patrons">
    <div
      class="h-auto bg-cover bg-no-repeat bg-center text-white py-12"
      :style="{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6) ), url(${require('@/assets/patrons-bg.jpg')})`
      }"
    >
      <div class="flex flex-wrap justify-center items-center">
        <div class="w-1/2 px-6 flex justify-center md:justify-end">
          <img
            class="h-24 w-24 object-cover"
            src="../assets/logo.png"
            alt="matrix logo"
          />
        </div>
        <div class="w-1/2 px-6 flex justify-center md:justify-start">
          <img
            class="h-24 w-24 object-cover"
            src="../assets/logo.png"
            alt="redken 5th avenue nyc logo"
          />
        </div>
        <div class="w-1/2 md:w-full px-4 flex justify-center">
          <img
            class="h-24 w-24 object-cover"
            src="../assets/logo.png"
            alt="secretos del agua logo"
          />
        </div>
        <div class="w-1/2 md:w-auto px-4 flex justify-center">
          <img
            class="h-24 w-24 object-cover"
            src="../assets/logo.png"
            alt="faby italian nail couture logo"
          />
        </div>
        <div class="w-1/2 md:w-auto px-4 flex justify-center">
          <img
            class="h-24 w-24 object-cover"
            src="../assets/logo.png"
            alt="guinot institut paris logo"
          />
        </div>
        <div class="w-1/2 md:w-auto px-4 flex justify-center">
          <img
            class="h-24 w-24 object-cover"
            src="../assets/logo.png"
            alt="the scientific skincare skeyndor logo"
          />
        </div>
        <div class="w-1/2 md:w-auto px-4 flex justify-center">
          <img
            class="h-24 w-24 object-cover"
            src="../assets/logo.png"
            alt="drv worldwide beauty logo"
          />
        </div>
        <div class="w-1/2 md:w-auto px-4 flex justify-center">
          <img
            class="h-24 w-24 object-cover"
            src="../assets/logo.png"
            alt="make-up studio logo"
          />
        </div>
        <div class="w-1/2 md:w-auto px-4 flex justify-center">
          <img
            class="h-24 w-24 object-cover"
            src="../assets/logo.png"
            alt="oroexpert logo"
          />
        </div>
        <div class="w-1/2 md:w-auto px-4 flex justify-center">
          <img
            class="h-24 w-24 object-cover"
            src="../assets/logo.png"
            alt="urbiola logo"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Patrons"
};
</script>
