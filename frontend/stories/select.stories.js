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
  placeholder: '',
  label: 'Gender',
  name:'name',
  options:[
    {
      value:'',
      label: 'Gender',
    },
    {
      value:1,
      label: 'Value 1',
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
export const SelectDynamicLabel = Template.bind({});
SelectDynamicLabel.args = {
  placeholder: '',
  label: '',
  dynamicValueLabel: true,
  name:'name',
  options:[
    {
      showed: '',
      label: '--',
      value: ''
    },
    {
      showed: 'IT',
      label: '+39',
      value: '+39'
    },
    {
      showed: 'UK',
      label: '+44',
      value: '+44'
    }
  ]
}

