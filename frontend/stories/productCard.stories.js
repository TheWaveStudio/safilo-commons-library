import ProductCard from "../components/shop/productCard";

export default {
  component: ProductCard,
  title: "Components/Shop",
};

const Template = (args, {argTypes}) => ({
  components: {ProductCard},
  props: Object.keys(argTypes),
  template: '<ProductCard v-bind="$props"  />',
});

export const Product = Template.bind({});
Product.args = {
  product: {
    "id": 6619277426868,
    "title": "Prodotto test",
    "body_html": "Prodotto bellissimo",
    "vendor": "tw-carrera",
    "product_type": "",
    "created_at": "2021-04-21T17:04:17+02:00",
    "handle": "prodotto-test",
    "updated_at": "2021-04-21T17:05:08+02:00",
    "published_at": "2021-04-21T17:05:08+02:00",
    "template_suffix": "",
    "status": "active",
    "published_scope": "web",
    "tags": "",
    "admin_graphql_api_id": "gid://shopify/Product/6619277426868",
    "variants": [
      {
        "id": 39638367568052,
        "product_id": 6619277426868,
        "title": "Default Title",
        "price": "6000.00",
        "sku": "",
        "position": 1,
        "inventory_policy": "deny",
        "compare_at_price": null,
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "created_at": "2021-04-21T17:04:17+02:00",
        "updated_at": "2021-04-21T17:05:08+02:00",
        "taxable": true,
        "barcode": "",
        "grams": 30000,
        "image_id": null,
        "weight": 30,
        "weight_unit": "kg",
        "inventory_item_id": 41733199921332,
        "inventory_quantity": 20000,
        "old_inventory_quantity": 20000,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/39638367568052"
      }
    ],
    "options": [
      {
        "id": 8508368519348,
        "product_id": 6619277426868,
        "name": "Title",
        "position": 1,
        "values": [
          "Default Title"
        ]
      }
    ],
    "images": [],
    "image": null
  }
};

