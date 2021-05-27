import DropdownItem from "../components/atoms/dropdown";

export default {
  component: DropdownItem,
  title: "Atoms/Dropdown",
};

const Template = (args, {argTypes}) => ({
  components: {DropdownItem},
  props: Object.keys(argTypes),
  template: '<DropdownItem v-bind="$props"  />',
});

export const Dropdown = Template.bind({});
Dropdown.args = {
  label: 'Shape',
  items:[
    {
      image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
      label: 'Rectangle',
      value: 'rectangle'
    },
    {

      image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
      label: 'Pilot',
      value: 'pilot'
    },
    {
      image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
      label: 'Navigator',
      value: 'navigator'
    },
    {

      image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
      label: 'Pantos',
      value: 'pantos'
    },
    {
      image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
      label: 'Round / Oval',
      value: 'round-oval'
    },
    {

      image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
      label: 'Special Shape',
      value: 'special'
    },
    {
      image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
      label: 'Rectangle1',
      value: 'rectangle1'
    },
    {

      image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
      label: 'Pilot1',
      value: 'pilot1'
    },
  ]
}
