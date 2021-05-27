import FormComponent from '../components/form';

export default {
  component: FormComponent,
  title: 'Components/Form',
};

const Template = (args, {argTypes}) => ({
  components: {FormComponent},
  props: Object.keys(argTypes),
  template: '<FormComponent v-bind="$props"  />',
});

export const Form = Template.bind({});
Form.args = {
  button:{label: 'Crea un account', variant: 'red'},
  buttonAlignment:"--text-right",
  wrapperFieldsClass:"row",
  formClass:"--full-width-submit-mobile",
  fields: [
    {
      componentName: 'Input',
      wrapperClass: 'col-12 col-md-6',
      ref: 'first_name',
      data: {
        name: 'first_name',
        isRequired: true,
        label: 'Nome',
        additionalClasses: 'field'
      }
    },
    {
      componentName: 'Input',
      wrapperClass: 'col-12 col-md-6',
      ref: 'last_name',
      data: {
        name: 'last_name',
        isRequired: true,
        label: 'Cognome',
        additionalClasses: 'field'
      }
    },
    {
      componentName: 'Select',
      wrapperClass: 'col-12 col-md-6',
      ref: 'gender',
      data: {
        name: 'gender',
        label: 'Gender',
        additionalClasses: 'field --last',
        options: [
          {
            label: 'Gender',
            value: ''
          },
          {
            label: 'Uomo',
            value: 'M'
          },
          {
            label: 'Donna',
            value: 'F'
          }
        ]
      }
    },
    {
      componentName: 'Input',
      wrapperClass: 'col-12 col-md-6',
      data: {
        name: 'birth_date',
        label: 'Data di nascita',
        additionalClasses: 'field --last --last-mobile',
        rules: 'date_format:dd/MM/yyyy'
      }
    },
    {
      componentName: 'Checkbox',
      wrapperClass: 'col-12',
      data: {
        name: 'privacy1',
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        additionalClasses: 'field --check'
      }
    }
  ]
}
