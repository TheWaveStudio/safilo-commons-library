<template>
  <div :class="`Phone fields-group ${additionalClasses}`">
    <Select v-bind="{...select, dynamicValueLabel: true}"/>
    <Input v-bind="input" />
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
<style lang="scss">
.Phone{
  @include flexing(row);
  .Select{
    flex: 0;
    min-width: 3.75rem;
  }
  .Input{
    flex: 1;
  }
}
</style>
