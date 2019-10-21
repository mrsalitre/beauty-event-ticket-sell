<template>
  <div>
    <Hero />
    <EventInfo />
    <Patrons />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
export default {
  name: "home",
  components: {
    Hero,
    EventInfo: () =>
      import(/* webpackChunkName: "EventInfo" */ "@/components/EventInfo.vue"),
    Patrons: () =>
      import(/* webpackChunkName: "EventInfo" */ "@/components/Patrons.vue")
  }
};
</script>
