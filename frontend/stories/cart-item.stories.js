import CartItemComponent from "../components/cart-item";

export default {
  component: CartItemComponent,
  title: "Components/Cart Item",
  argTypes: {
    site: {
      control: {
        type: 'select',
        options: ['pl', 'cr']
      }
    },
    type: {
      control: {
        type: 'select',
        options: ['cart', 'preview','preview-related']
      }
    },
  }
};

const Template = (args, {argTypes}) => ({
  components: {CartItemComponent},
  props: Object.keys(argTypes),
  template: '<div class="row"><div class="col-lg-7"><CartItemComponent v-bind="$props"  /></div></div>',
});

export const CartItem = Template.bind({});
CartItem.args = {
  site: 'cr',
  colorLabel: 'Colors',
  startPriceLabel:'from',
  currency: '€',
  product: {
    "id": 6732868583604,
    "title": "CARRERA 235/S",
    "body_html": "",
    "vendor": "tw-carrera",
    "product_type": "",
    "created_at": "2021-07-01T09:25:07+02:00",
    "handle": "africa56",
    "updated_at": "2021-07-07T15:13:06+02:00",
    "published_at": "2021-07-02T14:32:57+02:00",
    "template_suffix": "",
    "status": "active",
    "published_scope": "web",
    "tags": "best sellers",
    "admin_graphql_api_id": "gid://shopify/Product/6732868583604",
    "variants": [
      {
        "product_id": 6732868583604,
        "id": 40086519414964,
        "title": "Vaniglia / Regular",
        "price": "200.00",
        "sku": "",
        "position": 1,
        "inventory_policy": "deny",
        "compare_at_price": null,
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Vaniglia",
        "option2": "Regular",
        "option3": null,
        "created_at": "2021-07-01T09:25:07+02:00",
        "updated_at": "2021-07-07T15:13:06+02:00",
        "taxable": true,
        "barcode": "",
        "grams": 0,
        "image_id": 29479875608756,
        "weight": 0,
        "weight_unit": "kg",
        "inventory_item_id": 42182513230004,
        "inventory_quantity": 10,
        "old_inventory_quantity": 10,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/40086519414964"
      },
      {
        "product_id": 6732868583604,
        "id": 40086519447732,
        "title": "Nero / Regular",
        "price": "120.00",
        "sku": "",
        "position": 2,
        "inventory_policy": "deny",
        "compare_at_price": null,
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Nero",
        "option2": "Regular",
        "option3": null,
        "created_at": "2021-07-01T09:25:07+02:00",
        "updated_at": "2021-07-07T15:13:06+02:00",
        "taxable": true,
        "barcode": "",
        "grams": 0,
        "image_id": 29479875739828,
        "weight": 0,
        "weight_unit": "kg",
        "inventory_item_id": 42182513262772,
        "inventory_quantity": 200,
        "old_inventory_quantity": 200,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/40086519447732"
      },
      {
        "product_id": 6732868583604,
        "id": 40086519480500,
        "title": "Blu / Regular",
        "price": "150.00",
        "sku": "",
        "position": 3,
        "inventory_policy": "deny",
        "compare_at_price": null,
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Blu",
        "option2": "Regular",
        "option3": null,
        "created_at": "2021-07-01T09:25:07+02:00",
        "updated_at": "2021-07-07T15:13:06+02:00",
        "taxable": true,
        "barcode": "",
        "grams": 0,
        "image_id": 29479875543220,
        "weight": 0,
        "weight_unit": "kg",
        "inventory_item_id": 42182513295540,
        "inventory_quantity": 34,
        "old_inventory_quantity": 34,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/40086519480500"
      },
      {
        "product_id": 6732868583604,
        "id": 40086519513268,
        "title": "Africa / Regular",
        "price": "130.00",
        "sku": "",
        "position": 4,
        "inventory_policy": "deny",
        "compare_at_price": null,
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Africa",
        "option2": "Regular",
        "option3": null,
        "created_at": "2021-07-01T09:25:07+02:00",
        "updated_at": "2021-07-07T15:13:06+02:00",
        "taxable": true,
        "barcode": "",
        "grams": 0,
        "image_id": 29479875707060,
        "weight": 0,
        "weight_unit": "kg",
        "inventory_item_id": 42182513328308,
        "inventory_quantity": 40,
        "old_inventory_quantity": 40,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/40086519513268"
      },
      {
        "product_id": 6732868583604,
        "id": 40086519546036,
        "title": "Grigio sfumato / Regular",
        "price": "180.00",
        "sku": "",
        "position": 5,
        "inventory_policy": "deny",
        "compare_at_price": null,
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Grigio sfumato",
        "option2": "Regular",
        "option3": null,
        "created_at": "2021-07-01T09:25:08+02:00",
        "updated_at": "2021-07-07T15:13:06+02:00",
        "taxable": true,
        "barcode": "",
        "grams": 0,
        "image_id": 29479875870900,
        "weight": 0,
        "weight_unit": "kg",
        "inventory_item_id": 42182513361076,
        "inventory_quantity": 4,
        "old_inventory_quantity": 4,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/40086519546036"
      }
    ],
    "options": [
      {
        "product_id": 6732868583604,
        "id": 8650353868980,
        "name": "Color",
        "position": 1,
        "values": [
          "Vaniglia",
          "Nero",
          "Blu",
          "Africa",
          "Grigio sfumato"
        ]
      },
      {
        "product_id": 6732868583604,
        "id": 8665874956468,
        "name": "Misura",
        "position": 2,
        "values": [
          "Regular"
        ]
      }
    ],
    "images": [
      {
        "product_id": 6732868583604,
        "id": 29479875674292,
        "position": 1,
        "created_at": "2021-07-01T09:25:10+02:00",
        "updated_at": "2021-07-01T09:27:38+02:00",
        "alt": null,
        "width": 700,
        "height": 342,
        "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/sunglasses_1.jpg?v=1625124458",
        "variant_ids": [],
        "admin_graphql_api_id": "gid://shopify/ProductImage/29479875674292"
      },
      {
        "product_id": 6732868583604,
        "id": 29479875707060,
        "position": 2,
        "created_at": "2021-07-01T09:25:10+02:00",
        "updated_at": "2021-07-01T09:27:38+02:00",
        "alt": null,
        "width": 700,
        "height": 342,
        "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/sunglasses_1hov.jpg?v=1625124458",
        "variant_ids": [
          40086519513268
        ],
        "admin_graphql_api_id": "gid://shopify/ProductImage/29479875707060"
      },
      {
        "product_id": 6732868583604,
        "id": 29479875608756,
        "position": 3,
        "created_at": "2021-07-01T09:25:10+02:00",
        "updated_at": "2021-07-01T09:27:38+02:00",
        "alt": null,
        "width": 700,
        "height": 342,
        "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/sunglasses_2hov.jpg?v=1625124458",
        "variant_ids": [
          40086519414964
        ],
        "admin_graphql_api_id": "gid://shopify/ProductImage/29479875608756"
      },
      {
        "product_id": 6732868583604,
        "id": 29479875543220,
        "position": 4,
        "created_at": "2021-07-01T09:25:10+02:00",
        "updated_at": "2021-07-01T09:27:38+02:00",
        "alt": null,
        "width": 700,
        "height": 342,
        "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/sunglasses_3hov.jpg?v=1625124458",
        "variant_ids": [
          40086519480500
        ],
        "admin_graphql_api_id": "gid://shopify/ProductImage/29479875543220"
      },
      {
        "product_id": 6732868583604,
        "id": 29479875739828,
        "position": 5,
        "created_at": "2021-07-01T09:25:10+02:00",
        "updated_at": "2021-07-01T09:27:38+02:00",
        "alt": null,
        "width": 700,
        "height": 342,
        "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/sunglasses_4hov.jpg?v=1625124458",
        "variant_ids": [
          40086519447732
        ],
        "admin_graphql_api_id": "gid://shopify/ProductImage/29479875739828"
      },
      {
        "product_id": 6732868583604,
        "id": 29479875870900,
        "position": 6,
        "created_at": "2021-07-01T09:25:11+02:00",
        "updated_at": "2021-07-01T09:27:38+02:00",
        "alt": null,
        "width": 700,
        "height": 342,
        "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/sunglasses_hov.jpg?v=1625124458",
        "variant_ids": [
          40086519546036
        ],
        "admin_graphql_api_id": "gid://shopify/ProductImage/29479875870900"
      }
    ],
    "image": {
      "product_id": 6732868583604,
      "id": 29479875674292,
      "position": 1,
      "created_at": "2021-07-01T09:25:10+02:00",
      "updated_at": "2021-07-01T09:27:38+02:00",
      "alt": null,
      "width": 700,
      "height": 342,
      "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/sunglasses_1.jpg?v=1625124458",
      "variant_ids": [],
      "admin_graphql_api_id": "gid://shopify/ProductImage/29479875674292"
    }
  },
}
