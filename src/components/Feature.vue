<template>
  <div class="text-center p-6">
    <img
      class="h-24 w-full object-contain"
      :src="require(`../assets/${feature.img}`)"
      :alt="feature.alt"
    />
    <h3 class="text-xl font-semibold">{{ feature.title }}</h3>
    <p>{{ feature.text }}</p>
  </div>
</template>
<script>
export default {
  name: "Feature",
  props: {
    feature: {
      type: Object,
      required: true,
      img: {
        required: true,
        type: String
      },
      alt: {
        required: true,
        type: String
      },
      title: {
        required: true,
        type: String
      },
      text: {
        required: true,
        type: String
      }
    }
  }
};
</script>
