import SelectField from '../components/atoms/forms/select'

export default {
  component: SelectField,
  title: "Atoms/Forms/Select",
};

const Template = (args, {argTypes}) => ({
  components: {SelectField},
  props: Object.keys(argTypes),
  template: '<SelectField v-bind="$props"  />',
});

export const Select = Template.bind({});
Select.args = {
  placeholder: 'Seleziona un opzione',
  name:'name',
  options:[
    {
      value:1,
      label: 'Value 1'
    },
    {
      value:2,
      label: 'Value 2'
    },
    {
      value:3,
      label: 'Value 3'
    },
    {
      value:4,
      label: 'Value 4'
    },
  ]
}
