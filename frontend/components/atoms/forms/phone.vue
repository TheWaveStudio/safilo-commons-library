<template>
  <div :class="`Phone fields-group ${additionalClasses}`">
    <Select ref="select" v-bind="{...select, dynamicValueLabel: true}"/>
    <Input ref="input" v-bind="input" />
  </div>
</template>
<script>
import Input from './input'
import Select from './select'
export default{
  name:'PhoneField',
  components:{
    Input,
    Select
  },
  props:{
    additionalClasses:{
      type:String,
      default:''
    },
    select:{
      type: Object,
      default:{}
    },
    input:{
      type: Object,
      default:{}
    },
  },
  data(){
    return{
      isActive: false,
      field:'',
    }
  },
  computed:{
    required(){
      return this.isRequired ? `required${this.rules ? '|' : ''}` : '';
    },
    inputLabel(){
      return this.isRequired ? `${this.label} *` : this.label;
    }
  }
}
</script>
<style lang="scss" scoped>
.Phone{
  @include flexing(row);
  ::v-deep .Select{
    flex: 0 0 25%;
    min-width: 4rem;
  }
  ::v-deep .Input{
    flex: 0 0 75%;
  }
}
</style>
