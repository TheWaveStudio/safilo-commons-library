import ProductCardComponent from "../components/atoms/product-card";

export default {
  component: ProductCardComponent,
  title: "Components/Product Card",
  argTypes: {
    site: {
      control: {
        type: 'select',
        options: ['pl', 'cr']
      }
    },
    fullBackground: {
      control: {
        type: 'text'
      }
    },
  }
};

const Template = (args, {argTypes}) => ({
  components: {ProductCardComponent},
  props: Object.keys(argTypes),
  template: '<div class="row"><div class="col-md-4"><ProductCardComponent v-bind="$props"  /></div></div>',
});

export const ProductCard = Template.bind({});
ProductCard.args = {
  site: 'cr',
  fullBackground: require('../assets/imgs/sunglasses_fullbg.jpeg'),
  colorLabel: 'Colors',
  startPriceLabel:'from',
  currency: '€',
  product:{
    label: 'Best seller',
    title: 'Safari65',
    url:'localhost:3000/it/product/1029093019309',
    colors:[
      {
        image: require('../assets/imgs/sunglasses.jpeg'),
        hoveredImage:require('../assets/imgs/sunglasses_hov.jpeg'),
        price: '150,00',
        default: false
      },
      {
        image: require('../assets/imgs/sunglasses_1.jpeg'),
        hoveredImage: require('../assets/imgs/sunglasses_1hov.jpeg'),
        price: '170,00',
        default: false
      },
      {
        image: require('../assets/imgs/sunglasses_2.jpeg'),
        hoveredImage: require('../assets/imgs/sunglasses_2hov.jpeg'),
        price: '160,00',
        default: true
      },
      {
        image: require('../assets/imgs/sunglasses_3.jpeg'),
        hoveredImage: require('../assets/imgs/sunglasses_3hov.jpeg'),
        price: '200,00',
        default: false
      },
      {
        image: require('../assets/imgs/sunglasses_4.jpeg'),
        hoveredImage: require('../assets/imgs/sunglasses_4hov.jpeg'),
        price: '200,00',
        default: false
      },
    ]
  }
}
