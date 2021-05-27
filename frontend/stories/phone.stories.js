import PhoneField from '../components/atoms/forms/phone'

export default {
  component: PhoneField,
  title: "Atoms/Forms/Phone",
};

const Template = (args, {argTypes}) => ({
  components: {PhoneField},
  props: Object.keys(argTypes),
  template: '<PhoneField v-bind="$props"  />',
});

export const Phone = Template.bind({});
Phone.args = {
  select:{
    name: 'prefix',
    startValue: '+39',
    options: [
      {
        label: '+39',
        value: '+39',
        country: 'it'
      },
      {
        label: '+44',
        value: '+39',
        country: 'uk'
      }
    ]
  }
}
