import RegistrationComponent from "../components/auth/registration-component";

export default {
  component: RegistrationComponent,
  title: "Components/Auth",
};

export const Registration = () => ({
  components: {RegistrationComponent},
  template: '<RegistrationComponent />',
});
