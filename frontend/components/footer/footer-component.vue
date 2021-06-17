
<template>
  <div class="FooterComponent" :class="{'--pl': site === 'pl'}" itemscope itemtype="http://schema.org/WPFooter">
    <script v-html="ldFooter" type="application/ld+json" />
    <div class="main-content">

    
      <div class="brand-logo">
        <IconComponent icon-name="arrow-right"></IconComponent>
      </div>
      <div class="row">
        <LinksList class="col-6 col-md-3" :list="configs.firstColumn.list" :title="configs.firstColumn.title" :site="site" ></LinksList>
        <LinksList class="col-6 col-md-3" :list="configs.secondColumn.list" :title="configs.secondColumn.title" :site="site"></LinksList>
        
        <div class="col-12 col-md-6 align-items-space-between">
          <!-- social links -->
          <div class="row icons-list-container">
            <div class="col-12 align-self-start social-links">
              <SectionTitle :title="configs.socialLinks.title" :site="site"></SectionTitle>
              <ul class="icons-list">
                <li class="icons-list-item" v-for="(social, index) in configs.socialLinks.list" :key="index">
                  <a href=""><img :src="social.image" :alt="social.alt"></a>
                </li>
              </ul>
            </div>


            <!-- payment methods -->
            <div class="col-12 align-self-end payment-methods">
              <SectionTitle :title="configs.paymentMethods.title" :site="site"></SectionTitle>
              <ul class="icons-list">
                <li class="icons-list-item" v-for="(paym, index) in configs.paymentMethods.list" :key="index">
                  <img :src="paym.image" :alt="paym.alt">
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="copyright-strip">
      <h4 class="text">{{configs.copyright.text}}</h4>
      <img class="image" v-if="site === 'cr'" :src="configs.copyright.image" :alt="configs.copyright.alt">
    </div>
  </div>
</template>

<script>
import LinksList from './links-list'
import SectionTitle from './section-title'
import IconComponent from '../atoms/icon'

export default {
  name: 'FooterComponent',
  components:{LinksList, SectionTitle, IconComponent},
  props: {
    site: {
      validator: (val) => ['cr', 'pl'].indexOf(val !== -1)
    }
  },
  data() {
    return {
      configsCr: {
        firstColumn: {
          title: 'Carrera Eyeware',
          list:[{label: 'About us', pageName: 'about'}, {label: 'Privacy & Security', pageName: 'about'}, {label: 'Terms of Use', pageName: 'about'}, {label: 'Terms of Sale', pageName: 'about'}]
        },
        secondColumn: {
          title: 'Quick links',
          list:[{label: 'Contact us', pageName: 'about'}, {label: 'Return & Warrenties', pageName: 'about'}, {label: 'Shipping informations', pageName: 'about'}, {label: 'Size guides', pageName: 'about'}]
        },
        socialLinks: {
          title: 'Follow us',
          list: [{image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'Facebook logo'}, {image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'Instagram logo'}, {image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'Twitter logo'}, {image: require('../../assets/imgs/logos/Youtube-black.svg'), alt:'Youtube logo'}]
        },
        paymentMethods: {
          title: 'Payment methods',
          list: [{image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'Mastercar logo'}, {image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'Visa logo'}, {image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'American express logo'}, {image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'Discover logo'}, {image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'Unionpay logo'}]
        },
        copyright: {text: 'Carrera Eyeware \u00A9 ' + new Date().getFullYear(), image: require('../../assets/imgs/glasses.png'), alt: 'Carrera logo'}
      },

      configsPl: {
        firstColumn: {
          title: 'Polaroid Eyeware',
          list:[{label: 'About us', pageName: 'about'}, {label: 'Privacy & Security', pageName: 'about'}, {label: 'Terms of Use', pageName: 'about'}, {label: 'Terms of Sale', pageName: 'about'}]
        },
        secondColumn: {
          title: 'Quick links',
          list:[{label: 'Contact us', pageName: 'about'}, {label: 'Return & Warrenties', pageName: 'about'}, {label: 'Shipping informations', pageName: 'about'}, {label: 'Size guides', pageName: 'about'}]
        },
        socialLinks: {
          title: 'Follow us',
          list: [{image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'Facebook logo'}, {image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'Instagram logo'}, {image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'Twitter logo'}, {image: require('../../assets/imgs/logos/Youtube-black.svg'), alt:'Youtube logo'}]
        },
        paymentMethods: {
          title: 'Payment methods',
          list: [{image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'Mastercar logo'}, {image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'Visa logo'}, {image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'American express logo'}, {image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'Discover logo'}, {image: require('../../assets/imgs/logos/Instagram-black.svg'), alt:'Unionpay logo'}]
        },
        copyright: {text: 'Polaroid Eyeware \u00A9 ' + new Date().getFullYear(), image: require('../../assets/imgs/glasses.png'), alt: 'Carrera logo'}
      },
      ldFooterCr: {
        "@context" : "http://schema.org",
        "@type" : "Organization",
        "name" : "Carrera",
        "url" : "https://www.carrera.com",
        "sameAs" : [
          "https://www.facebook.com/carrera",
          "https://twitter.com/carrera",
          "https://plus.google.com/carrera"
        ]
      },
      ldFooterPl: {
        "@context" : "http://schema.org",
        "@type" : "Organization",
        "name" : "Carrera",
        "url" : "https://www.polaroid.com",
        "sameAs" : [
          "https://www.facebook.com/polaroid",
          "https://twitter.com/polaroid",
          "https://plus.google.com/polaroid"
        ]
      }
    }
  },
  computed: {
    configs() { return this.site === 'cr' ? this.configsCr : this.configsPl },
    ldFooter() { return this.site === 'cr' ? this.ldFooterCr : this.ldFooterPl },
  }
}
</script>
<style lang="scss">

$std-side-spacing: 32px; // TODO: replace including spacing class

.FooterComponent{

  .main-content{
    background: $black;
    padding-top: 32px;
    padding-bottom: 57px;

    @extend .std-side-spacing;

    @include media-breakpoint-down(sm) {
      padding-bottom: 32px;
    }
  }

  .brand-logo{
    text-align: center;
    margin: 16px;
    color: $white;
    opacity: 0.64;
    margin-bottom: 15px;
  }

  .icons-list-container{
    height: 100%;
  }    
  .icons-list{
    list-style: none;
    display: flex;
    align-items: stretch;
    justify-content: start;
    padding: 0;
    margin-bottom: 0;
  }
  .icons-list-item{
    width: 24px;
    height: 24px;
    display: block;
    flex: 0 1 auto;
    margin-right: 32px;
    margin-bottom: 0;

    & > *{
      color: $white;
      opacity: 0.64;
    }
  }

  .social-links, .payment-methods, .LinksList{
    margin-top: 32px;
  }

  .copyright-strip{
    background: $white;
    text-align: center;
    padding: 16px $std-side-spacing 0 $std-side-spacing;

    .text{
      @extend .heading-overline;
      text-transform: uppercase;
      margin: 0;
    }

    .image{
      margin-top: 16px;
      max-width: 65px;
    }

  }

  &.--pl{
    .main-content{
      background: $white;
    }

    .copyright-strip{
      background: #ccc;
      text-align: left;
      padding-bottom: 16px;
      
      .text{
        font-size: 12px;
        line-height: 16px;
        text-transform: none;
      }
    }
  }
}
</style>
