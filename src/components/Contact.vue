<template>
  <section id="contact">
    <div
      class="h-auto bg-cover bg-no-repeat bg-center py-20"
      :style="{
        backgroundImage: `url(${require('@/assets/contact-bg.jpg')})`
      }"
    >
      <div
        class="flex flex-wrap justify-center rounded-lg items-center shadow-lg bg-white mx-4 md:mx-10"
      >
        <div class="w-full md:w-1/2 p-10">
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3">
              <div class="w-full px-3">
                <input
                  class="appearance-none bg-transparent border-b border-b-2 border-yellow-600 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-center"
                  id="grid-password"
                  type="text"
                  placeholder="Nombre"
                />
                <p class="text-red-500 text-xs italic text-center">
                  Por favor rellene este campo.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3">
              <div class="w-full md:w-1/2 px-3">
                <input
                  class="appearance-none bg-transparent border-b border-b-2 border-yellow-600 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-center"
                  id="grid-password"
                  type="text"
                  placeholder="Teléfono"
                />
                <p class="text-red-500 text-xs italic text-center">
                  Por favor rellene este campo.
                </p>
              </div>
              <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
              <div class="w-full md:w-1/2 px-3">
                <input
                  class="appearance-none bg-transparent border-b border-b-2 border-yellow-600 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-center"
                  id="grid-password"
                  type="text"
                  placeholder="E-mail"
                />
                <p class="text-red-500 text-xs italic text-center">
                  Por favor rellene este campo.
                </p>
              </div>
            </div>
            <hr
              class="border-yellow-600 border border-t-0 border-r-0 border-l-0 my-10"
            />
            <div class="w-full px-3 mt-6 border border-yellow-600 rounded">
              <textarea
                placeholder="Mensaje"
                class="appearance-none resize-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-center h-32"
              ></textarea>
            </div>
            <p class="text-red-500 text-xs italic text-center">
              Por favor rellene este campo.
            </p>
            <div class="w-full text-center mt-6">
              <a
                href="#"
                class="bg-transparent hover:bg-yellow-600 text-black font-semibold hover:text-white border border-yellow-600 hover:border-transparent rounded-lg py-2 px-3"
              >
                Enviar
              </a>
            </div>
          </form>
        </div>
        <div class="w-full md:w-1/2">
          <iframe
            width="100%"
            height="500"
            frameborder="0"
            style="border:0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.7917880883674!2d-15.428442885452236!3d28.12237481373822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40957476703b99%3A0x9e8d4979f1966a75!2sTAO%20Club%20%26%20Garden!5e0!3m2!1ses!2ses!4v1571871312528!5m2!1ses!2ses"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Contact"
};
</script>
