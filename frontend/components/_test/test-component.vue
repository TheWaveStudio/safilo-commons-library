<template>
  <section>
    Prova "{{ data }}"
  </section>
</template>

<script>
export default {
  name: 'test-component',
  setup() {
    return {
      data: "Dynamic data",
    }
  },
};
</script>
