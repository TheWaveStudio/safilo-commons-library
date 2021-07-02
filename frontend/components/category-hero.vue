<template>
  <section  :class="{
        'CategoryHero': true,
        '--cr': site === 'cr',
        '--pl' : site === 'pl',
      }">
    <img class="category-hero__image" :src="item.image.src" :alt="item.image.alt" />
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="category-hero__content">
            <h1 class="category-hero__title heading-h2 --text-uppercase">{{item.title}}</h1>
            <p class="category-hero__title">{{item.subtitle}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default{
  name: 'CategoryHero',
  props: {
    item:{
      type: Object,
      default:() => ({
        title:'',
        subtitle:'',
        image:{src:'',alt:''},
      })
    },
    site:{
      type: String,
      default:'cr'
    }
  }
}
</script>
<style lang="scss" scoped>
.CategoryHero{
  color:$white;
  position: relative;
  width: 100%;
  &::before{
    background-color: rgba($primary, 0.22);
    bottom:0;
    content:'';
    left:0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
  &.\--cr{
    @include flexing(column);
    justify-content: flex-end;
    max-height:6.4rem;
    min-height: 6.4rem;
    overflow: hidden;
    padding-bottom: 1.6rem;
    @include media-breakpoint-up(lg){
      margin-top: -4.8rem;
      max-height: 17rem;
      min-height: 17rem;
      position: relative;
    }
     > .container{
       height: 100%;
     }
    .category-hero{
      &__image{
        height: 100%;
        left: 0;
        object-fit: cover;
        object-position: center;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
      }

      &__content{
        position: relative;
        z-index: 2;
      }

      &__title{
        margin-bottom: 0;
      }
    }
  }
}
</style>
