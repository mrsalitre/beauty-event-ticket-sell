<template>
  <section id="hero">
    <div
      class="h-screen bg-cover bg-no-repeat bg-center"
      :style="{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6) ), url(${require('@/assets/hero.jpg')})`
      }"
    >
      <div
        class="container mx-auto h-full flex justify-center items-center text-center"
      >
        <div class="w-auto">
          <div
            class="flex items-center mb-4 absolute top-0 right-0 mt-2 mr-4 md:mt-10 md:mr-12"
          >
            <svg
              class="h-4 w-4 mr-4 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
              />
            </svg>
            <p class="font-semibold text-medium text-white">928 000 555</p>
            <a href="https://www.facebook.com">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-square"
                class="h-4 w-4 ml-4 mr-2 fill-current text-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                ></path>
              </svg>
            </a>
            <a href="https://www.instagram.com">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                class="h-4 w-4 fill-current text-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
          </div>
          <div
            class="text-5xl sm:text-6xl leading-none font-bold uppercase mb-4"
          >
            <p class="text-white">La fiesta de la</p>
            <p class="text-yellow-400 -mt-6">Belleza</p>
          </div>
          <p
            class="text-sm sm:text-base text-white uppercase font-medium leading-loose mb-4"
          >
            Dirigido a profesionales del sector de la belleza <br />
            Organiza Adela Caicova
          </p>
          <img
            class="h-20 w-full object-contain mb-4"
            src="../assets/logo.png"
            alt="logo"
          />
          <!-- <img class="object-none object-center" src="../assets/logo.png" alt="Logo de Adela Caicova"> -->
          <a
            href="#contact"
            class="bg-transparent hover:bg-white text-white font-semibold hover:text-black border border-white hover:border-transparent rounded-full py-2 px-3"
            >Comprar entradas</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Hero"
};
</script>
