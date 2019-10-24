<template>
  <section id="event-info">
    <div class="container mx-auto py-8 h-auto">
      <div class="md:flex md:w-4/5 mb-4 mt-4 items-center mx-auto h-full">
        <div class="md:w-3/5 md:mx-auto mx-4 my-2">
          <h2 class="text-2xl uppercase mb-4">La fiesta de la belleza</h2>
          <p class="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quas,
            doloribus odio fugit dolore esse dicta saepe officia aspernatur
            mollitia quasi. Voluptate voluptatibus iure ipsam nostrum excepturi
            laudantium autem sequi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            obcaecati facilis dignissimos culpa explicabo molestias doloribus
            voluptatibus iure ipsam nostrum excepturi.
          </p>
          <br />
          <p>
            Sit amet consectetur neque quae dolor officiis amet sit amet
            consectetur adipisicing consectetur adipisicing elit?
          </p>
        </div>
        <!-- <ul class="text-lg font-medium">
            <li>23 de Noviembre</li>
            <li>Terraza TAO Garden</li>
            <li><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"/></svg><span>19:00</span></li>
            <li>30€ <span class="text-sm text-gray-500">(a partir de la segunda unidad, la entrada sale a 25€)</span></li>
          </ul> -->
        <div class="md:w-2/5 md:mx-auto mx-4 my-2 px-10 py-4">
          <ul>
            <div class="flex items-center mb-4">
              <svg
                class="h-8 w-8 mr-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
                />
              </svg>
              <p class="font-semibold text-medium">23 de Noviembre</p>
            </div>
            <div class="flex items-center mb-4">
              <svg
                class="h-8 w-8 mr-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
              <p class="font-semibold text-medium">Terraza TAO Garden</p>
            </div>
            <div class="flex items-center mb-4">
              <svg
                class="h-8 w-8 mr-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"
                />
              </svg>
              <p class="font-semibold text-medium">19:00</p>
            </div>
            <div class="flex items-center mb-4">
              <svg
                class="h-8 w-8 mr-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 12v5H0v-5a2 2 0 1 0 0-4V3h20v5a2 2 0 1 0 0 4zM3 5v10h14V5H3zm7 7.08l-2.92 2.04L8.1 10.7 5.27 8.56l3.56-.08L10 5.12l1.17 3.36 3.56.08-2.84 2.15 1.03 3.4L10 12.09z"
                />
              </svg>
              <p class="font-semibold text-medium">
                30€
                <span class="text-xs text-gray-700"
                  >(25€ a partir de la segunda entrada)</span
                >
              </p>
            </div>
          </ul>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <div class="w-auto">
          <a
            href="#contact"
            class="bg-transparent hover:bg-black text-black font-semibold hover:text-white border border-black hover:border-transparent rounded-full py-2 px-3"
          >
            Comprar entradas
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventInfo"
};
</script>
