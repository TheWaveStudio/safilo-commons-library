<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      class="SafiloForm --registration"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <div class="row  align-items-start">
        <div class="col col-md-6">
          <ValidationProvider
            class="input-group"
            name="first_name"
            rules="required"
            tag="div"
            v-slot="{ errors }"
          >
            <o-field>
              <o-input
                expanded
                inputClass="form-field"
                placeholder="Name*"
                type="text"
                v-model="first_name"
              />
            </o-field>
            <span class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="col col-md-6">
          <ValidationProvider
            class="input-group"
            name="last_name"
            rules="required"
            tag="div"
            v-slot="{ errors }"
          >
            <o-field>
              <o-input
                expanded
                inputClass="form-field"
                placeholder="Surname*"
                type="text"
                v-model="last_name"
              />
            </o-field>

            <span class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="col-12">
          <ValidationProvider
            class="input-group"
            name="email"
            rules="required|email"
            tag="div"
            v-slot="{ errors }"
          >
            <o-field>
              <o-input
                expanded
                inputClass="form-field"
                placeholder="Email address*"
                type="text"
                v-model="email"
              />
            </o-field>
            <span class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="col col-md-6">
          <ValidationProvider
            class="input-group"
            name="password"
            rules="required|min:6|confirmed:confirmation"
            tag="div"
            v-slot="{ errors }"
          >
            <o-field
              message="Minimum 6 characters. Must containe at least one number and one letter."
            >
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
        </div>
        <div class="col col-md-6">
          <ValidationProvider
            inputClass="form-field"
            name="password_confirmation"
            rules="required"
            tag="div"
            vid="confirmation"
            v-slot="{ errors }"
          >
            <o-field>
              <o-input
                expanded
                inputClass="form-field"
                placeholder="Confirm password"
                type="password"
                v-model="password_confirmation"
              />
            </o-field>

            <span class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>

      <o-field>
        <o-button
        native-type="submit"
        rootClass="--submit --center"
        variant="primary">
          Create account
        </o-button>
      </o-field>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "SignupComponent",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submitted");
    },
  },
};
</script>
