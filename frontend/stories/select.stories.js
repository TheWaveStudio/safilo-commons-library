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
      optionLabel: 'Gender',
    },
    {
      value:1,
      optionLabel: 'Value 1',
    },
    {
      value:2,
      optionLabel: 'Value 2'
    },
    {
      value:3,
      optionLabel: 'Value 3'

    },
    {
      value:4,
      optionLabel: 'Value 4'
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
      inputLabel: '',
      optionLabel: '--',
      value: ''
    },
    {
      inputLabel: 'IT',
      optionLabel: '+39',
      value: '+39'
    },
    {
      inputLabel: 'UK',
      optionLabel: '+44',
      value: '+44'
    }
  ]
}

