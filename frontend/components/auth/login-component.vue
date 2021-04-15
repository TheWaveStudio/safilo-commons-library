<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <o-field horizontal label="Username">
        <o-input
          type="email"
          value=""
          placeholder="Iserisci username"
          v-model="login.username"
        />
      </o-field>
      <o-field horizontal label="Password">
        <o-input
          value=""
          type="password"
          placeholder="Inserisci password"
          v-model="login.password"
        />
      </o-field>
      <o-field horizontal>
        <o-button variant="primary"> Log In </o-button>
      </o-field>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login-component',
  props: {
    onSubmit: Function,
    login: Object
  }
}
</script>