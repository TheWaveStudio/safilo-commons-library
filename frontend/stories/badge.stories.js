import BadgeItem from "../components/atoms/badge";

export default {
  component: BadgeItem,
  title: "Atoms/Badge",
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['', 'vertical']
      }
    },
  }
};

const Template = (args, {argTypes}) => ({
  components: {BadgeItem},
  props: Object.keys(argTypes),
  template: '<BadgeItem v-bind="$props"  />',
});

export const Badge = Template.bind({});
Badge.args = {
  label:'Best seller'
}
