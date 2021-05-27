import RadioField from '../components/atoms/forms/radio'

export default {
  component: RadioField,
  title: "Atoms/Forms/Radio",
};

const Template = (args, {argTypes}) => ({
  components: {RadioField},
  props: Object.keys(argTypes),
  template: '<RadioField v-bind="$props"  />',
});

export const Radio = Template.bind({});
Radio.args = {
  name:'radio',
  radios:[
    {
      value:'radio1',
      label: 'Radio 1'
    },
    {
      value:'radio2',
      label: 'Radio 2'
    }, {
      value:'radio3',
      label: 'Radio 3'
    }
  ]

}

