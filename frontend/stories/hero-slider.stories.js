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
  sliderItems:[
    {
      fields:{
        tag:"highlight",
        title: 'Drive your story',
        description: 'Choose to be bold.',
        image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
        cta:{text:'Discover more', path:'/'}
      }
    },
    {
      fields:{
        tag:"highlight",
        title: 'Drive your story',
        description: 'Choose to be bold.',
        image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
        cta:{text:'Discover more', path:'/'}
      }
    },
    {
      fields:{
        title: 'Drive your story',
        description: 'Choose to be bold.',
        image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
        cta:{text:'Discover more', path:'/'}
      }
    }, {
      fields:{
        tag:"highlight",
        title: 'Drive your story',
        description: 'Choose to be bold.',
        image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
        cta:{text:'Discover more', path:'/'}
      }
    },
    {
      fields:{
        tag:"highlight",
        title: 'Drive your story',
        description: 'Choose to be bold.',
        image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
        cta:{text:'Discover more', path:'/'}
      }
    }

  ]
}


