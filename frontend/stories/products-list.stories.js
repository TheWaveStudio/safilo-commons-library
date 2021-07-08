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
      "id": 6736286449844,
      "title": "CA 8044/CS",
      "body_html": "",
      "vendor": "tw-carrera",
      "product_type": "",
      "created_at": "2021-07-02T14:21:22+02:00",
      "handle": "ca-8044-cs",
      "updated_at": "2021-07-02T14:33:10+02:00",
      "published_at": "2021-07-02T14:33:10+02:00",
      "template_suffix": "",
      "status": "active",
      "published_scope": "web",
      "tags": "",
      "admin_graphql_api_id": "gid://shopify/Product/6736286449844",
      "variants": [
        {
          "product_id": 6736286449844,
          "id": 40096533414068,
          "title": "nero",
          "price": "160.00",
          "sku": "",
          "position": 1,
          "inventory_policy": "deny",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "nero",
          "option2": null,
          "option3": null,
          "created_at": "2021-07-02T14:21:22+02:00",
          "updated_at": "2021-07-02T14:24:32+02:00",
          "taxable": true,
          "barcode": "",
          "grams": 0,
          "image_id": 29500812394676,
          "weight": 0,
          "weight_unit": "kg",
          "inventory_item_id": 42192520380596,
          "inventory_quantity": 21,
          "old_inventory_quantity": 21,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/40096533414068"
        },
        {
          "product_id": 6736286449844,
          "id": 40096533446836,
          "title": "blu",
          "price": "190.00",
          "sku": "",
          "position": 2,
          "inventory_policy": "deny",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "blu",
          "option2": null,
          "option3": null,
          "created_at": "2021-07-02T14:21:22+02:00",
          "updated_at": "2021-07-02T14:24:48+02:00",
          "taxable": true,
          "barcode": "",
          "grams": 0,
          "image_id": 29500812427444,
          "weight": 0,
          "weight_unit": "kg",
          "inventory_item_id": 42192520413364,
          "inventory_quantity": 23,
          "old_inventory_quantity": 23,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/40096533446836"
        },
        {
          "product_id": 6736286449844,
          "id": 40096533479604,
          "title": "rosso",
          "price": "170.00",
          "sku": "",
          "position": 3,
          "inventory_policy": "deny",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "rosso",
          "option2": null,
          "option3": null,
          "created_at": "2021-07-02T14:21:22+02:00",
          "updated_at": "2021-07-02T14:25:19+02:00",
          "taxable": true,
          "barcode": "",
          "grams": 0,
          "image_id": 29500812460212,
          "weight": 0,
          "weight_unit": "kg",
          "inventory_item_id": 42192520446132,
          "inventory_quantity": 42,
          "old_inventory_quantity": 42,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/40096533479604"
        }
      ],
      "options": [
        {
          "product_id": 6736286449844,
          "id": 8654325940404,
          "name": "Color",
          "position": 1,
          "values": [
            "nero",
            "blu",
            "rosso"
          ]
        }
      ],
      "images": [
        {
          "product_id": 6736286449844,
          "id": 29500792504500,
          "position": 1,
          "created_at": "2021-07-02T14:21:59+02:00",
          "updated_at": "2021-07-02T14:23:37+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/occhiali_1400x_e3cb468c-407b-4d99-80c6-012287fcbde4.jpg?v=1625228617",
          "variant_ids": [],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29500792504500"
        },
        {
          "product_id": 6736286449844,
          "id": 29500812394676,
          "position": 2,
          "created_at": "2021-07-02T14:23:59+02:00",
          "updated_at": "2021-07-02T14:23:59+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/nero.jpg?v=1625228639",
          "variant_ids": [
            40096533414068
          ],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29500812394676"
        },
        {
          "product_id": 6736286449844,
          "id": 29500812460212,
          "position": 3,
          "created_at": "2021-07-02T14:23:59+02:00",
          "updated_at": "2021-07-02T14:23:59+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/red.jpg?v=1625228639",
          "variant_ids": [
            40096533479604
          ],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29500812460212"
        },
        {
          "product_id": 6736286449844,
          "id": 29500812427444,
          "position": 4,
          "created_at": "2021-07-02T14:23:59+02:00",
          "updated_at": "2021-07-02T14:23:59+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/blue.jpg?v=1625228639",
          "variant_ids": [
            40096533446836
          ],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29500812427444"
        }
      ],
      "image": {
        "product_id": 6736286449844,
        "id": 29500792504500,
        "position": 1,
        "created_at": "2021-07-02T14:21:59+02:00",
        "updated_at": "2021-07-02T14:23:37+02:00",
        "alt": null,
        "width": 700,
        "height": 342,
        "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/occhiali_1400x_e3cb468c-407b-4d99-80c6-012287fcbde4.jpg?v=1625228617",
        "variant_ids": [],
        "admin_graphql_api_id": "gid://shopify/ProductImage/29500792504500"
      }
    },
    {
      "id": 6736487841972,
      "title": "CA EPICA II",
      "body_html": "",
      "vendor": "tw-carrera",
      "product_type": "",
      "created_at": "2021-07-02T14:53:02+02:00",
      "handle": "ca-epica-ii",
      "updated_at": "2021-07-02T15:00:38+02:00",
      "published_at": "2021-07-02T15:00:38+02:00",
      "template_suffix": "",
      "status": "active",
      "published_scope": "web",
      "tags": "",
      "admin_graphql_api_id": "gid://shopify/Product/6736487841972",
      "variants": [
        {
          "product_id": 6736487841972,
          "id": 40097038467252,
          "title": "nero",
          "price": "145.00",
          "sku": "",
          "position": 1,
          "inventory_policy": "deny",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "nero",
          "option2": null,
          "option3": null,
          "created_at": "2021-07-02T14:53:02+02:00",
          "updated_at": "2021-07-02T14:53:42+02:00",
          "taxable": true,
          "barcode": "",
          "grams": 0,
          "image_id": 29501183000756,
          "weight": 0,
          "weight_unit": "kg",
          "inventory_item_id": 42193024975028,
          "inventory_quantity": 23,
          "old_inventory_quantity": 23,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/40097038467252"
        },
        {
          "product_id": 6736487841972,
          "id": 40097038500020,
          "title": "marrone",
          "price": "145.00",
          "sku": "",
          "position": 2,
          "inventory_policy": "deny",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "marrone",
          "option2": null,
          "option3": null,
          "created_at": "2021-07-02T14:53:02+02:00",
          "updated_at": "2021-07-02T14:53:52+02:00",
          "taxable": true,
          "barcode": "",
          "grams": 0,
          "image_id": 29501181558964,
          "weight": 0,
          "weight_unit": "kg",
          "inventory_item_id": 42193025007796,
          "inventory_quantity": 12,
          "old_inventory_quantity": 12,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/40097038500020"
        },
        {
          "product_id": 6736487841972,
          "id": 40097038532788,
          "title": "rosa",
          "price": "195.00",
          "sku": "",
          "position": 3,
          "inventory_policy": "deny",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "rosa",
          "option2": null,
          "option3": null,
          "created_at": "2021-07-02T14:53:02+02:00",
          "updated_at": "2021-07-02T14:54:05+02:00",
          "taxable": true,
          "barcode": "",
          "grams": 0,
          "image_id": 29501182214324,
          "weight": 0,
          "weight_unit": "kg",
          "inventory_item_id": 42193025040564,
          "inventory_quantity": 45,
          "old_inventory_quantity": 45,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/40097038532788"
        },
        {
          "product_id": 6736487841972,
          "id": 40097038565556,
          "title": "sfumato",
          "price": "165.00",
          "sku": "",
          "position": 4,
          "inventory_policy": "deny",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "sfumato",
          "option2": null,
          "option3": null,
          "created_at": "2021-07-02T14:53:02+02:00",
          "updated_at": "2021-07-02T14:54:22+02:00",
          "taxable": true,
          "barcode": "",
          "grams": 0,
          "image_id": 29501182607540,
          "weight": 0,
          "weight_unit": "kg",
          "inventory_item_id": 42193025073332,
          "inventory_quantity": 54,
          "old_inventory_quantity": 54,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/40097038565556"
        },
        {
          "product_id": 6736487841972,
          "id": 40097038598324,
          "title": "viola",
          "price": "195.00",
          "sku": "",
          "position": 5,
          "inventory_policy": "deny",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "viola",
          "option2": null,
          "option3": null,
          "created_at": "2021-07-02T14:53:02+02:00",
          "updated_at": "2021-07-02T14:54:34+02:00",
          "taxable": true,
          "barcode": "",
          "grams": 0,
          "image_id": 29501182738612,
          "weight": 0,
          "weight_unit": "kg",
          "inventory_item_id": 42193025106100,
          "inventory_quantity": 43,
          "old_inventory_quantity": 43,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/40097038598324"
        }
      ],
      "options": [
        {
          "product_id": 6736487841972,
          "id": 8654555709620,
          "name": "Color",
          "position": 1,
          "values": [
            "nero",
            "marrone",
            "rosa",
            "sfumato",
            "viola"
          ]
        }
      ],
      "images": [
        {
          "product_id": 6736487841972,
          "id": 29501179429044,
          "position": 1,
          "created_at": "2021-07-02T14:53:05+02:00",
          "updated_at": "2021-07-02T14:53:05+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/default_962655d4-8daf-4fc7-b101-e8aa77f03f5e.jpg?v=1625230385",
          "variant_ids": [],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29501179429044"
        },
        {
          "product_id": 6736487841972,
          "id": 29501181558964,
          "position": 2,
          "created_at": "2021-07-02T14:53:19+02:00",
          "updated_at": "2021-07-02T14:53:19+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/marrone.jpg?v=1625230399",
          "variant_ids": [
            40097038500020
          ],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29501181558964"
        },
        {
          "product_id": 6736487841972,
          "id": 29501182214324,
          "position": 3,
          "created_at": "2021-07-02T14:53:23+02:00",
          "updated_at": "2021-07-02T14:53:23+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/rosa.jpg?v=1625230403",
          "variant_ids": [
            40097038532788
          ],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29501182214324"
        },
        {
          "product_id": 6736487841972,
          "id": 29501182607540,
          "position": 4,
          "created_at": "2021-07-02T14:53:25+02:00",
          "updated_at": "2021-07-02T14:53:25+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/sfumato2.jpg?v=1625230405",
          "variant_ids": [
            40097038565556
          ],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29501182607540"
        },
        {
          "product_id": 6736487841972,
          "id": 29501182738612,
          "position": 5,
          "created_at": "2021-07-02T14:53:25+02:00",
          "updated_at": "2021-07-02T14:53:25+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/viola.jpg?v=1625230405",
          "variant_ids": [
            40097038598324
          ],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29501182738612"
        },
        {
          "product_id": 6736487841972,
          "id": 29501183000756,
          "position": 6,
          "created_at": "2021-07-02T14:53:27+02:00",
          "updated_at": "2021-07-02T14:53:27+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/nerod.jpg?v=1625230407",
          "variant_ids": [
            40097038467252
          ],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29501183000756"
        }
      ],
      "image": {
        "product_id": 6736487841972,
        "id": 29501179429044,
        "position": 1,
        "created_at": "2021-07-02T14:53:05+02:00",
        "updated_at": "2021-07-02T14:53:05+02:00",
        "alt": null,
        "width": 700,
        "height": 342,
        "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/default_962655d4-8daf-4fc7-b101-e8aa77f03f5e.jpg?v=1625230385",
        "variant_ids": [],
        "admin_graphql_api_id": "gid://shopify/ProductImage/29501179429044"
      }
    },
    {
      "id": 6736411558068,
      "title": "CARRERA 221/S",
      "body_html": "",
      "vendor": "tw-carrera",
      "product_type": "",
      "created_at": "2021-07-02T14:41:45+02:00",
      "handle": "carrera-221-s",
      "updated_at": "2021-07-02T15:00:52+02:00",
      "published_at": "2021-07-02T15:00:52+02:00",
      "template_suffix": "",
      "status": "active",
      "published_scope": "web",
      "tags": "new arrivals",
      "admin_graphql_api_id": "gid://shopify/Product/6736411558068",
      "variants": [
        {
          "product_id": 6736411558068,
          "id": 40096857358516,
          "title": "grigio",
          "price": "200.00",
          "sku": "",
          "position": 1,
          "inventory_policy": "deny",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "grigio",
          "option2": null,
          "option3": null,
          "created_at": "2021-07-02T14:44:09+02:00",
          "updated_at": "2021-07-02T14:44:50+02:00",
          "taxable": true,
          "barcode": "",
          "grams": 0,
          "image_id": 29501051666612,
          "weight": 0,
          "weight_unit": "kg",
          "inventory_item_id": 42192843899060,
          "inventory_quantity": 125,
          "old_inventory_quantity": 125,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/40096857358516"
        },
        {
          "product_id": 6736411558068,
          "id": 40096857391284,
          "title": "verde",
          "price": "200.00",
          "sku": "",
          "position": 2,
          "inventory_policy": "deny",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "verde",
          "option2": null,
          "option3": null,
          "created_at": "2021-07-02T14:44:09+02:00",
          "updated_at": "2021-07-02T14:44:45+02:00",
          "taxable": true,
          "barcode": "",
          "grams": 0,
          "image_id": 29501054124212,
          "weight": 0,
          "weight_unit": "kg",
          "inventory_item_id": 42192843931828,
          "inventory_quantity": 25,
          "old_inventory_quantity": 25,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/40096857391284"
        },
        {
          "product_id": 6736411558068,
          "id": 40096857424052,
          "title": "sfumato",
          "price": "250.00",
          "sku": "",
          "position": 3,
          "inventory_policy": "deny",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "sfumato",
          "option2": null,
          "option3": null,
          "created_at": "2021-07-02T14:44:09+02:00",
          "updated_at": "2021-07-02T14:45:05+02:00",
          "taxable": true,
          "barcode": "",
          "grams": 0,
          "image_id": 29501054058676,
          "weight": 0,
          "weight_unit": "kg",
          "inventory_item_id": 42192843964596,
          "inventory_quantity": 25,
          "old_inventory_quantity": 25,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/40096857424052"
        },
        {
          "product_id": 6736411558068,
          "id": 40096857456820,
          "title": "nero",
          "price": "250.00",
          "sku": "",
          "position": 4,
          "inventory_policy": "deny",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "nero",
          "option2": null,
          "option3": null,
          "created_at": "2021-07-02T14:44:09+02:00",
          "updated_at": "2021-07-02T14:45:37+02:00",
          "taxable": true,
          "barcode": "",
          "grams": 0,
          "image_id": 29501054156980,
          "weight": 0,
          "weight_unit": "kg",
          "inventory_item_id": 42192843997364,
          "inventory_quantity": 25,
          "old_inventory_quantity": 25,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/40096857456820"
        }
      ],
      "options": [
        {
          "product_id": 6736411558068,
          "id": 8654465138868,
          "name": "Colore",
          "position": 1,
          "values": [
            "grigio",
            "verde",
            "sfumato",
            "nero"
          ]
        }
      ],
      "images": [
        {
          "product_id": 6736411558068,
          "id": 29501049274548,
          "position": 1,
          "created_at": "2021-07-02T14:42:49+02:00",
          "updated_at": "2021-07-02T14:43:13+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/default.jpg?v=1625229793",
          "variant_ids": [],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29501049274548"
        },
        {
          "product_id": 6736411558068,
          "id": 29501051666612,
          "position": 2,
          "created_at": "2021-07-02T14:43:05+02:00",
          "updated_at": "2021-07-02T14:43:13+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/grey.jpg?v=1625229793",
          "variant_ids": [
            40096857358516
          ],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29501051666612"
        },
        {
          "product_id": 6736411558068,
          "id": 29501054124212,
          "position": 3,
          "created_at": "2021-07-02T14:43:23+02:00",
          "updated_at": "2021-07-02T14:43:23+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/green.jpg?v=1625229803",
          "variant_ids": [
            40096857391284
          ],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29501054124212"
        },
        {
          "product_id": 6736411558068,
          "id": 29501054156980,
          "position": 4,
          "created_at": "2021-07-02T14:43:23+02:00",
          "updated_at": "2021-07-02T14:43:23+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/black.jpg?v=1625229803",
          "variant_ids": [
            40096857456820
          ],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29501054156980"
        },
        {
          "product_id": 6736411558068,
          "id": 29501054058676,
          "position": 5,
          "created_at": "2021-07-02T14:43:23+02:00",
          "updated_at": "2021-07-02T14:43:23+02:00",
          "alt": null,
          "width": 700,
          "height": 342,
          "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/sfumato.jpg?v=1625229803",
          "variant_ids": [
            40096857424052
          ],
          "admin_graphql_api_id": "gid://shopify/ProductImage/29501054058676"
        }
      ],
      "image": {
        "product_id": 6736411558068,
        "id": 29501049274548,
        "position": 1,
        "created_at": "2021-07-02T14:42:49+02:00",
        "updated_at": "2021-07-02T14:43:13+02:00",
        "alt": null,
        "width": 700,
        "height": 342,
        "src": "https://cdn.shopify.com/s/files/1/0562/0511/5572/products/default.jpg?v=1625229793",
        "variant_ids": [],
        "admin_graphql_api_id": "gid://shopify/ProductImage/29501049274548"
      }
    },
    {
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
          "id": 40086519414964,
          "product_id": 6732868583604,
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
          "id": 40086519447732,
          "product_id": 6732868583604,
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
          "id": 40086519480500,
          "product_id": 6732868583604,
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
          "id": 40086519513268,
          "product_id": 6732868583604,
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
          "id": 40086519546036,
          "product_id": 6732868583604,
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
          "id": 8650353868980,
          "product_id": 6732868583604,
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
          "id": 8665874956468,
          "product_id": 6732868583604,
          "name": "Misura",
          "position": 2,
          "values": [
            "Regular"
          ]
        }
      ],
      "images": [
        {
          "id": 29479875674292,
          "product_id": 6732868583604,
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
          "id": 29479875707060,
          "product_id": 6732868583604,
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
          "id": 29479875608756,
          "product_id": 6732868583604,
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
          "id": 29479875543220,
          "product_id": 6732868583604,
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
          "id": 29479875739828,
          "product_id": 6732868583604,
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
          "id": 29479875870900,
          "product_id": 6732868583604,
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
        "id": 29479875674292,
        "product_id": 6732868583604,
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
    }
  ]
}
