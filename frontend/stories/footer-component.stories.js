import FooterComp from '../components/footer/footer-component'

export default {
  component: FooterComp,
  title: "Components/Footer/Footer Component",
  argTypes: {
    site: {
      control: {
        type: 'select',
        options:['cr', 'pl']
      }
    }
  }
};

const Template = (args, {argTypes}) => ({
  components: {FooterComp},
  props: Object.keys(argTypes),
  template: '<FooterComp v-bind="$props" />',
});

export const Footer = Template.bind({});
Footer.args = {
  site: 'cr'
}
