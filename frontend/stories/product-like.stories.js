import ProductLike from "../components/atoms/product/like";

export default {
  component: ProductLike,
  title: "Atoms/Product/Like",
};

const Template = (args, {argTypes}) => ({
  components: {ProductLike},
  props: Object.keys(argTypes),
  template: '<ProductLike v-bind="$props"  />',
});

export const Like = Template.bind({});
