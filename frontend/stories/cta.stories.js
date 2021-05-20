import CtaItem from "../components/atoms/cta";

export default {
  component: CtaItem,
  title: "Atoms/CTA",
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['white', 'cr_black', 'cr_red']
      }
    },
    iconName: {
      control: {
        type: 'select',
        options: ['arrow-right']
      }
    },
    tag: {
      control: {
        type: 'radio',
        options:['button', 'a', 'nuxt-link']
      }
    },
  }
};

const Template = (args, {argTypes}) => ({
  components: {CtaItem},
  props: Object.keys(argTypes),
  template: '<CtaItem v-bind="$props"  />',
});

export const CTA = Template.bind({});
CTA.args = {
  label: 'Call to action',
  color: 'cr_black'
}
