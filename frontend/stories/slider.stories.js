import SliderComponent from "../components/slider";

export default {
  component: SliderComponent,
  title: "Components/Slider",
};

const Template = (args, {argTypes}) => ({
  components: {SliderComponent},
  props: Object.keys(argTypes),
  template: '<SliderComponent v-bind="$props"  />',
});

export const Slider = Template.bind({});
Slider.args = {
  sliderItems:[
    {
      componentName: 'HeroSliderItem',
      fields:{
        tag:"highlight",
        title: 'Drive your story',
        description: 'Choose to be bold.',
        image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
        cta:{text:'Discover more', path:'/'}
      }
    },
    {
      componentName: 'HeroSliderItem',
      fields:{
        tag:"highlight",
        title: 'Drive your story',
        description: 'Choose to be bold.',
        image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
        cta:{text:'Discover more', path:'/'}
      }
    },
    {
      componentName: 'HeroSliderItem',
      fields:{
        title: 'Drive your story',
        description: 'Choose to be bold.',
        image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
        cta:{text:'Discover more', path:'/'}
      }
    }, {
      componentName: 'HeroSliderItem',
      fields:{
        tag:"highlight",
        title: 'Drive your story',
        description: 'Choose to be bold.',
        image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
        cta:{text:'Discover more', path:'/'}
      }
    },
    {
      componentName: 'HeroSliderItem',
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


