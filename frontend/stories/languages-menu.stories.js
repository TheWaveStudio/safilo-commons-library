import LanguagesMenuComponent from "../components/atoms/languages-menu";

export default {
  component: LanguagesMenuComponent,
  title: "Atoms/Languages Menu",
};

const Template = (args, {argTypes}) => ({
  components: {LanguagesMenuComponent},
  props: Object.keys(argTypes),
  template: '<LanguagesMenuComponent v-bind="$props"  />',
});

export const LanguagesMenu = Template.bind({});
LanguagesMenu.args = {
  currentLanguage: 'it',
  title:"CHOOSE YOUR COUNTRY",
  menus:[
    {
      icon: 'flag-ita',
      label: 'Italy',
      code:'it',
      buttonCode: 'ita',
      url:'http://localhost:3000/it'
    },
    {
      icon: 'flag-fra',
      label: 'France',
      code:'fr',
      buttonCode: 'fra',
      url:'http://localhost:3000/fr'
    },
    {
      icon: 'flag-uk',
      label: 'UK',
      code:'en',
      buttonCode: 'uk',
      url:'http://localhost:3000/en'
    },
    {
      icon: 'flag-esp',
      label: 'Spain',
      buttonCode: 'esp',
      code:'es',
      url:'http://localhost:3000/sp'
    },
    {
      icon: 'flag-deu',
      label: 'Germany',
      buttonCode: 'deu',
      code:'de',
      url:'http://localhost:3000/de'
    },
    {
      icon: 'flag-world',
      label: 'Worldwide',
      buttonCode: 'WW',
      code:'',
      url:'http://localhost:3000/'
    },
  ],
  ctaText: 'Apply',
}
