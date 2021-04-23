import Oruga from "@oruga-ui/oruga";
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

const VeeValidate= {rules: rules, extend: extend}

export * from "./components";
export { Oruga, VeeValidate };
