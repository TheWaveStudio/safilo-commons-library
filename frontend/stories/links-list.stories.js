import LinksList from '../components/footer/links-list'

export default {
  component: LinksList,
  title: "Components/Footer/Links List",
};

const Template = (args, {argTypes}) => ({
  components: {LinksList},
  props: Object.keys(argTypes),
  template: '<LinksList v-bind="$props" style="background-color: black" />',
});

export const List = Template.bind({});
List.args = {
  title: 'Carrera Eyeware',
  list:[{label: 'About us', pageName: 'about'}, {label: 'Privacy & Security', pageName: 'about'}, {label: 'Terms of Use', pageName: 'about'}]
}
