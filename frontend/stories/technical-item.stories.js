import Technical from "../components/atoms/technical-item"

export default {
  component: Technical,
  title: "Atoms/Technical Item",
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['dropdown-item', 'technical']
      }
    }
  }
};

const Template = (args, {argTypes}) => ({
  components: {Technical},
  props: Object.keys(argTypes),
  template: `<Technical v-bind="$props" />`,
});


export const TechnicalItem = Template.bind({});
TechnicalItem.args = {
  item:{
    image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
    label: 'Rectangle',
    value: 'rectangle',
    category: 'Shape'
  }
}
