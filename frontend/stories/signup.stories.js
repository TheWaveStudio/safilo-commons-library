import SignUpComponent from "../components/auth/signup-component";

export default {
  component: SignUpComponent,
  title: "Components/Auth",
};

export const SignUp = () => ({
  components: {SignUpComponent},
  template: '<SignUpComponent />',
});
