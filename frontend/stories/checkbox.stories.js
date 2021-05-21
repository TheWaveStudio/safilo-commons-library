import CheckboxField from '../components/atoms/forms/checkbox'

export default {
  component: CheckboxField,
  title: "Atoms/Forms/Checkbox",
};

const Template = (args, {argTypes}) => ({
  components: {CheckboxField},
  props: Object.keys(argTypes),
  template: '<CheckboxField v-bind="$props"  />',
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  name:'name',
  label:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
}
