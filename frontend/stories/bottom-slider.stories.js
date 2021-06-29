import BottomSliderComponent from "../components/bottom-slider";

export default {
  component: BottomSliderComponent,
  title: "Components/Bottom Slider",
};

const Template = (args, {argTypes}) => ({
  components: {BottomSliderComponent},
  props: Object.keys(argTypes),
  template: '<BottomSliderComponent v-bind="$props"  />',
});

export const BottomSlider = Template.bind({});
BottomSlider.args = {
  formatted: true,
  items:[
    {
      item:{
        tag:"Carrera soul",
        title: 'THIS IS CONTENT TITLE',
        description: 'Yes, though we hunker down, we also extend ourselves in forgotten ways; as we cinch the breadth of our ambitions, we deepen the grit with which we approach our vision.',
        image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
        cta:{text:'Discover more', path:'/'}
      },
    },
    {
      item:{
        tag:"Carrera soul",
        title: 'THIS IS CONTENT TITLE',
        description: 'Yes, though we hunker down, we also extend ourselves in forgotten ways; as we cinch the breadth of our ambitions, we deepen the grit with which we approach our vision.',
        image: {src: require('../assets/imgs/slider.jpeg'), alt:'slider'},
        cta:{text:'Discover more', path:'/'}
      },
    },
  ]
}


