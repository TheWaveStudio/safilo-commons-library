import SignInComponent from "../components/auth/signin-component";

export default {
  component: SignInComponent,
  title: "Components/Auth",
};

export const SignIn = () => ({
  components: {SignInComponent},
  template: '<SignInComponent />',
});
