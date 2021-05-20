import ProductPrice from "../components/atoms/product/price";

export default {
  component: ProductPrice,
  title: "Atoms/Product/Price",
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['bold', 'small', 'medium', 'large']
      }
    }
  }
};

const Template = (args, {argTypes}) => ({
  components: {ProductPrice},
  props: Object.keys(argTypes),
  template: '<ProductPrice v-bind="$props"  />',
});

export const Price = Template.bind({});
Price.args={
  currency: '€',
  price:'199,99'
}
