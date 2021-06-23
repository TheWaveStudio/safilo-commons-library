import ButtonItem from "../components/atoms/button";

export default {
  component: ButtonItem,
  title: "Atoms/Button",
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options:['medium', 'large']
      }
    },
    variant: {
      control: {
        type: 'select',
        options: ['black', 'red', 'white']
      }
    }
  }
};

const Template = (args, {argTypes}) => ({
  components: {ButtonItem},
  props: Object.keys(argTypes),
  template: '<ButtonItem v-bind="$props"  />',
});

export const Button = Template.bind({});
Button.args = {
  price: '€ 20.00',
  tag: 'button',
  variant: 'black'
}
