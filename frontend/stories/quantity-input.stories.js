import QuantityInput from '../components/atoms/forms/quantity'

export default {
  component: QuantityInput,
  title: "Atoms/Forms/Quantity",
  argTypes: {
    site: {
      control: {
        type: 'select',
        options: ['cr', 'pl']
      }
    },
  }
};

const Template = (args, {argTypes}) => ({
  components: {QuantityInput},
  props: Object.keys(argTypes),
  template: '<QuantityInput v-bind="$props"  />',
});

export const Quantity = Template.bind({});
Quantity.args = {}

