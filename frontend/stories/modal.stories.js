import SideModalComponent from '../components/modal';
import FormComponent from '../components/form'

export default {
  component: SideModalComponent,
  subcomponents:{FormComponent},
  title: 'Components/SideModal',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['side', 'center']
      }
    },
  }
};

const Template = (args, {argTypes}) => ({
  components: {SideModalComponent, FormComponent},
  props: Object.keys(argTypes),
  template:  `<SideModalComponent  v-bind="$props"> 
    <template #title>
        <h2 class="heading-h2 --text-uppercase">Reset password</h2>
     </template>
     <template #subtitle><p>Enter your email address and we will send you a new password.</p></template>
     <template #main-content>
        <FormComponent v-bind="$props.form"/>
      </template>
    </SideModalComponent>`,
});

export const SideModal = Template.bind({});
SideModal.args = {
  button:{
    label:"Open Modal"
  },
  form: {
    button: {label: 'Send new Password', variant: 'black'},
    buttonAlignment: "--text-right",
    wrapperFieldsClass: "row",
    formClass: "--full-width-submit-mobile",
    fields: [
      {
        componentName: 'Input',
        wrapperClass: 'col-12',
        ref: 'email',
        data: {
          name: 'email',
          isRequired: true,
          label: 'Email address',
          additionalClasses: 'field'
        }
      },
    ],
  }
}
