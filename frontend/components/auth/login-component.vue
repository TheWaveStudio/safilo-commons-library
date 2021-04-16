<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="SafiloForm --login" @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider
        class="input-group"
        name="username"
        rules="required|email"
        tag="div"
        v-slot="{ errors }"
      >
        <o-field>
          <o-input
            expanded
            inputClass="form-field"
            placeholder="Email address"
            type="text"
            v-model="username"
          />
        </o-field>
        <span class="error-message">{{ errors[0] }}</span>
      </ValidationProvider>
      <ValidationProvider
        class="input-group"
        name="password"
        rules="required"
        tag="div"
        v-slot="{ errors }"
      >
        <o-field>
          <o-input
            expanded
            inputClass="form-field"
            placeholder="Password"
            type="password"
            v-model="password"
          />
        </o-field>

        <span class="error-message">{{ errors[0] }}</span>
      </ValidationProvider>

      <o-field>
        <o-button
          native-type="submit"
          rootClass="--submit --center --full-width"
          variant="primary"
        >
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
