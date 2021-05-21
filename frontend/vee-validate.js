import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
//
// extend('required', {
//   message: 'This field is required' // the error message
// })
