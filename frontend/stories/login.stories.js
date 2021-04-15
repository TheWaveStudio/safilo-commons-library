import LoginComponent from "../components/auth/login-component";

export default {
  component: LoginComponent,
  title: "Components/Auth",
  argTypes: {
    login: {
      username: "",
      password: "",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { LoginComponent },
  props: Object.keys(argTypes),
  template: '<login-component v-bind="$props" v-on="$props" />',
});

export const Login = Template.bind({});

Login.args = {
  onSubmit: () => console.log("Submit"),
  login: { username: "", password: "" },
};
