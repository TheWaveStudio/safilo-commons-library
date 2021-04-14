<template>
  <section>
    <div class="container">
    <o-button @click="clickMe">Click Me</o-button>
    {{ count }}

    </div>
  </section>
</template>
<script>
export default {
  name: "oruga-component",
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    clickMe() {
      this.count++;
    },
  },
};
</script>