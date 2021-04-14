<template>
  <section>
    Prova "{{ data }}"
  </section>
</template>

<script>
export default {
  name: 'test-component',
  data () {
    return {

      data: "Dynamic data",
    }
  }
};
</script>
