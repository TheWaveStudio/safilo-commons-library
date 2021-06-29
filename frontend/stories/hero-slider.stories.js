import HeroSliderComponent from "../components/hero-slider";

export default {
  component: HeroSliderComponent,
  title: "Components/Hero Slider",
};

const Template = (args, {argTypes}) => ({
  components: {HeroSliderComponent},
  props: Object.keys(argTypes),
  template: '<HeroSliderComponent v-bind="$props"  />',
});

export const HeroSlider = Template.bind({});
HeroSlider.args = {
  formatted: true,
  items:[
    {
      item:{
        tag:"highlight",
        title: 'Drive your story',
        description: 'Choose to be bold.',
        image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
        cta:{text:'Discover more', path:'/'}
      }
    },
    {
      item:{
        tag:"highlight",
        title: 'Drive your story',
        description: 'Choose to be bold.',
        image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
        cta:{text:'Discover more', path:'/'}
      }
    },
    {
      item:{
        title: 'Drive your story',
        description: 'Choose to be bold.',
        image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
        cta:{text:'Discover more', path:'/'}
      }
    },
  ]
}


