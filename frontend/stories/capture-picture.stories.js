import CapturePictureComponent from "../components/atoms/capture-picture";

export default {
  component: CapturePictureComponent,
  title: "Atoms/Capture Picture",
};

const Template = (args, {argTypes}) => ({
  components: {CapturePictureComponent},
  props: Object.keys(argTypes),
  template: '<CapturePictureComponent v-bind="$props"  />',
});

export const Slider = Template.bind({});
Slider.args = {
  formatted: true,
  item:{
    type: 'slider',
    tag:"highlight",
    title: 'Drive your story',
    description: 'Choose to be bold.',
    image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
    cta:{text:'Discover more', path:'/'}
  }
}

export const Menu = Template.bind({});
Menu.args = {
  formatted: true,
  item: {
    type: 'menu',
    title: 'CARRERA 230/S',
    image: {src: require('../assets/imgs/slider.jpeg'), alt: 'slider'},
  }
}

export const Highlighted = Template.bind({});
Highlighted.args = {
  formatted: true,
  item: {
    type: 'highlighted',
    title: 'Champion65',
    image: {src: require('../assets/imgs/slider.jpeg'), alt: 'slider'},
    cta: {text: 'Discover more', path: '/'}
  }
}

