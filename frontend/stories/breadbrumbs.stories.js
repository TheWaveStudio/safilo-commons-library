import BreadcrumbsComponent from "../components/breadcrumbs";

export default {
  component: BreadcrumbsComponent,
  title: "Components/Breadcrumbs",
};

const Template = (args, {argTypes}) => ({
  components: {BreadcrumbsComponent},
  props: Object.keys(argTypes),
  template: '<BreadcrumbsComponent v-bind="$props"  />',
});

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
 breadcrumbs:[
   {
     label:'All Sunglasses',
     url: '/shop/sunglasses'
   },
   {
     label:'Men',
     url: '/shop/sunglasses/men'
   },
   {
     label:'Safari65',
     url: '/shop/sunglasses/men/safari65'
   }
 ]
}

