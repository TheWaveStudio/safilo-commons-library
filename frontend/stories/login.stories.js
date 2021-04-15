import LoginComponent from "../components/auth/login-component";

export default {
  component: LoginComponent,
  title: "Components/Auth",
};

export const Login = () => ({
  components: {LoginComponent},
  template: '<LoginComponent />',
});
