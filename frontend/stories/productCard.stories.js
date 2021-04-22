import ProductCard from "../components/shop/productCard";

export default {
  component: ProductCard,
  title: "Components/Shop",
};

const Template = (args, {argTypes}) => ({
  components: {ProductCard},
  props: Object.keys(argTypes),
  template: '<ProductCard v-bind="$props"  />',
});

export const Product = Template.bind({});
Product.args = {
  product: {
    title: 'Occhiali da sole',
    price: '499€'
  }
};
