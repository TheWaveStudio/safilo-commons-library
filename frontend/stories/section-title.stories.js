import SectionTitle from '../components/footer/links-list'

export default {
  component: SectionTitle,
  title: "Components/Footer/Section title",
};

const Template = (args, {argTypes}) => ({
  components: {SectionTitle},
  props: Object.keys(argTypes),
  template: '<SectionTitle v-bind="$props" style="background-color: black" />',
});

export const Title = Template.bind({});
Title.args = {
  title: 'Carrera Eyeware',
}
