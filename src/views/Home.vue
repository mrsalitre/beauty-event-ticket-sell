<template>
  <div>
    <Hero />
    <EventInfo />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
export default {
  name: "home",
  components: {
    Hero,
    EventInfo: () =>
      import(/* webpackChunkName: "EventInfo" */ "@/components/EventInfo.vue")
  }
};
</script>
