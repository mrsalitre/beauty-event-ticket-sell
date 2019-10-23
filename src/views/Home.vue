<template>
  <div>
    <Hero />
    <EventInfo />
    <Patrons />
    <Features />
    <Schedule />
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
      import(/* webpackChunkName: "Patrons" */ "@/components/Patrons.vue"),
    Features: () =>
      import(/* webpackChunkName: "Features" */ "@/components/Features.vue"),
    Schedule: () =>
      import(/* webpackChunkName: "Schedule" */ "@/components/Schedule.vue")
  }
};
</script>
