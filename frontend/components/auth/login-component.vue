<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="LoginForm" @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider
        name="username"
        rules="required|email"
        v-slot="{ errors }"
      >
        <o-field>
          <o-input
            v-model="username"
            type="email"
            value=""
            placeholder="Email address"
          />
        </o-field>
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <ValidationProvider name="password" rules="required" v-slot="{ errors }">
        <o-field>
          <o-input
            v-model="password"
            value=""
            type="password"
            placeholder="Password"
          />
        </o-field>

        <span>{{ errors[0] }}</span>
      </ValidationProvider>

      <o-field>
        <o-button variant="primary" native-type="submit">
          Login
        </o-button>
      </o-field>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "LoginComponent",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submitted");
    },
  },
};
</script>
