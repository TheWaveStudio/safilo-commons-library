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
  currentMenu: {
    image: {src: require('../assets/imgs/ita.png'), alt:'ita'},
    code: 'ITA',
  },
  menus:[
    {
      image: {src: require('../assets/imgs/ita.png'), alt:'ita'},
      code: 'ITA',
      url:'http://localhost:3000/it'
    },
    {
      image: {src: require('../assets/imgs/fra.png'), alt:'fra'},
      code: 'FRA',
      url:'http://localhost:3000/fr'
    },
    {
      image: {src: require('../assets/imgs/eng.png'), alt:'eng'},
      code: 'ENG',
      url:'http://localhost:3000/en'
    },
    {
      image: {src: require('../assets/imgs/spa.svg'), alt:'spa'},
      code: 'SPA',
      url:'http://localhost:3000/sp'
    },
  ]
}
