import ShopBarComponent from "../components/shop-bar";

export default {
  component: ShopBarComponent,
  title: "Components/Shop Bar",
};

const Template = (args, {argTypes}) => ({
  components: {ShopBarComponent},
  props: Object.keys(argTypes),
  template: '<ShopBarComponent v-bind="$props"  />',
});

export const ShopBar = Template.bind({});
ShopBar.args = {
  categories:[
    {label: 'Women', src: '/sunglasses/women'},
    {label: 'Men', src: '/sunglasses/men'},
    {label: 'Best Sellers', src: '/sunglasses/best-sellers'},
    {label: 'New Arrivals', src: '/sunglasses/new-arrivals'},
    {label: 'Sale', src: '/sunglasses/sale'},
  ],
  filters:[
    {
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
    },
    {
      label: 'Frame Color',
      items:[
        {
          image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
          label: 'Red',
          value: 'red'
        },
        {

          image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
          label: 'Blue',
          value: 'blue'
        },
        {
          image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
          label: 'Black',
          value: 'black'
        },
        {

          image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
          label: 'Brown',
          value: 'brown'
        },
      ]
    },
    {
      label: 'Lense Color',
      items:[
        {
          image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
          label: 'Black',
          value: 'black'
        },
        {

          image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
          label: 'Green',
          value: 'green'
        },
        {
          image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
          label: 'Grey',
          value: 'grey'
        },
        {

          image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
          label: 'Brown',
          value: 'brown'
        },
      ]
    },
    {
      label: 'Lense treatment',
      items:[
        {
          image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
          label: 'Antigraffio',
          value: 'antigraffio'
        },
        {

          image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
          label: 'Antiriflesso',
          value: 'antiriflesso'
        },
        {
          image: {src: require('../assets/imgs/glasses.png'), alt:'glasses'},
          label: 'Luci blu',
          value: 'luci-blu'
        },
      ]
    },
  ],
  orderBy:[
    {
      label: 'OrderBy',
      items:[
        {
          label: 'Prezzo crescente',
          value: 'asc'
        },
        {
          label: 'Prezzo decrescente',
          value: 'desc'
        },
        {
          label: 'Più recente',
          value: 'newest'
        },
        {
          label: 'Meno recente',
          value: 'oldest'
        },
      ]
    }
  ],
  productsTotal: '23',
  labels:{
    products: 'products',
    filters: 'Filters',
    clear: 'Clear All',
    apply: 'Apply'
  }
}

