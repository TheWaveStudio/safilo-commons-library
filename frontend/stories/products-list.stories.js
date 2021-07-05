import ProductsListComponent from "../components/products-list";

export default {
  component: ProductsListComponent,
  title: "Components/Product List",
};

const Template = (args, {argTypes}) => ({
  components: {ProductsListComponent},
  props: Object.keys(argTypes),
  template: '<ProductsListComponent v-bind="$props"  />',
});

export const ProductsList = Template.bind({});
ProductsList.args = {
  products:[
    {
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
    },
    {
      label: 'Best seller',
      title: 'Safari65',
      url:'localhost:3000/it/product/1029093019309',
      colors:[
        {
          image: require('../assets/imgs/sunglasses.jpeg'),
          hoveredImage:require('../assets/imgs/sunglasses_hov.jpeg'),
          price: '150,00',
          default: true
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
          default: false
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
    },
    {
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
          default: false
        },
        {
          image: require('../assets/imgs/sunglasses_3.jpeg'),
          hoveredImage: require('../assets/imgs/sunglasses_3hov.jpeg'),
          price: '200,00',
          default: true
        },
        {
          image: require('../assets/imgs/sunglasses_4.jpeg'),
          hoveredImage: require('../assets/imgs/sunglasses_4hov.jpeg'),
          price: '200,00',
          default: false
        },
      ]
    },
    {
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
          default: false
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
          default: true
        },
      ]
    }
  ]
}
