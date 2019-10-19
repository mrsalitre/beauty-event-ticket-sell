<template>
    <section id="hero">
        <div class="h-screen bg-cover bg-no-repeat bg-center" :style="{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6) ), url(${require('@/assets/hero.jpg')})`}">
            <div class="container mx-auto h-full flex justify-center items-center text-center">
                <div class="w-auto">
                    <div class="text-5xl sm:text-6xl leading-none font-bold uppercase mb-4">
                        <p class="text-white">La fiesta de la</p>
                        <p class="text-yellow-400 -mt-6">Belleza</p>
                    </div>
                    <p class="text-sm sm:text-base text-white uppercase font-medium leading-loose mb-6">Dirigido a profesionales del sector de la belleza <br> Organiza Adela Caicova</p>
                    <!-- <img class="object-none object-center" src="../assets/logo.png" alt="Logo de Adela Caicova"> -->
                    <a href="#" class="bg-transparent hover:bg-white text-white font-semibold hover:text-black border border-white hover:border-transparent rounded-full py-2 px-3">Comprar entradas</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: "Hero"
}
</script>