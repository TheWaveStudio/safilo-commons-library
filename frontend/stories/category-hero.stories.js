import CategoryHeroComponent from "../components/category-hero";

export default {
  component: CategoryHeroComponent,
  title: "Components/Category Hero",
};

const Template = (args, {argTypes}) => ({
  components: {CategoryHeroComponent},
  props: Object.keys(argTypes),
  template: '<CategoryHeroComponent v-bind="$props"  />',
});

export const CategoryHero = Template.bind({});
CategoryHero.args = {
  formatted: true,
  item:{
    title: 'Sunglasses',
    image: {src: require('../assets/imgs/women.jpeg'), alt:'slider'},
  }
}

