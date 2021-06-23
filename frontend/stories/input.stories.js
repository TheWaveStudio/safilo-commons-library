import InputField from '../components/atoms/forms/input'

export default {
  component: InputField,
  title: "Atoms/Forms/Input",
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['date', 'password', 'email', 'text']
      }
    },
  }
};

const Template = (args, {argTypes}) => ({
  components: {InputField},
  props: Object.keys(argTypes),
  template: '<InputField v-bind="$props"  />',
});

export const Input = Template.bind({});
Input.args = {
  label: 'Name',
  name:'name'
}

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  name:'password',
  type:'password',
}

export const Email = Template.bind({});
Email.args = {
  label: 'Email',
  name:'email',
  type:'email',
  rules:'email'
}

export const Date = Template.bind({});
Date.args = {
  placeholder: 'Date',
  name:'date',
  type:'date'
}
