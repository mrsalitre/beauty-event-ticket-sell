<template>
  <section id="features">
    <div class="container mx-auto py-12 md:px-16">
      <div class="flex flex-wrap justify-center">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="w-full md:w-1/3 px-6 flex justify-center"
        >
          <Feature :feature="feature" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Features",
  components: {
    Feature: () =>
      import(/* webpackChunkName: "Feature" */ "@/components/Feature.vue")
  },
  data() {
    return {
      features: [
        {
          img: "logo.png",
          title: "Tendencias de belleza",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
          img: "logo.png",
          title: "Tendencias de peluquería",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
          img: "logo.png",
          title: "Ponencias",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
          img: "logo.png",
          title: "Celebración",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
          img: "logo.png",
          title: "Cocktail",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        }
      ]
    };
  }
};
</script>
