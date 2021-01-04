<template>
    <div>
        <BannerCarousel class="hide-on-tab-port" :items="items"/>
        <Banner class="show-on-tab-port" :item="items[0]"/>
        <SectionAbout v-for="(item, i) in about" :key="i" :about="item" :reverse="i % 2 !== 0 ? true : false" />
        <section class="section-plays pt-medium">
            <GroupCarousel :items="TopBooks" title="topBooks" />
        </section>
        <SectionVideo/>
        <section class="section-contact" id="section-contact">
            <ContactForm/>
            <div class="circle circle--reverse"></div>
        </section>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import BannerCarousel from '@/components/general/BannerCarousel.vue';
import Banner from '@/components/general/Banner.vue'
import SectionAbout from '@/components/home/SectionAbout.vue';
import GroupCarousel from '@/components/general/GroupCarousel.vue';
import SectionVideo from '@/components/home/SectionVideo.vue';
import ContactForm from '@/components/home/ContactForm.vue';
import {books} from '@/collections/books';
@Component({
   components:{
    BannerCarousel,
    SectionAbout,
    GroupCarousel,
    SectionVideo,
    ContactForm,
    Banner
   }
})
export default class Home extends Vue {
  //public model: 
  TopBooks : any = []
  created(){
      this.TopBooks = books.filter((el: { top: boolean; }) => el.top === true);
  }
  public items: Record<string,any> =[
          {
            src: require('@/assets/images/background.jpg'),
            primary: true,
            title: 'Michele Castelli',
            subtitle: 'Venezuela',
            btn: 'contactMe'
          },
          {
            src: require('@/assets/images/venice.png'),
            text: 'Venezia, Italia',
          },
          {
            src: require('@/assets/images/vatican.png'),
            text: 'Ciudad del Vaticano',
          },
           {
            src: require('@/assets/images/venezuela-2.jpg'),
            text: 'Caracas, Venezuela'
          }
        ]
  public about:Record<string,any> = [
      {
          src: require('@/assets/images/scrittore.png'),
          position: "vertical",
          about: {
              title: 'about.title',
              subtitle: 'about.subtitle',
              description: 'about.description[0]'
          }
      },
      {
          src: require('@/assets/images/scrittore-2.jpg'),
          icon: 'icon-quotes-left',
          position: "horizontal",
          about:{
              description:'about.description[1]'
          }
      },
      {
          src: require('@/assets/images/scrittore-3.jpg'),
          icon: 'icon-quotes-left',
          position: "vertical",
          about:{
              description:'about.description[2]'
          }
      }
  ]
  public books: Record<string, any> =[
      {
          src: 'https://static.wixstatic.com/media/413b22_803fcd5ccf2242e7a012ada3c00113b5~mv2.jpg/v1/fill/w_260,h_367,al_c,q_80,usm_0.66_1.00_0.01/COPERTINA%20LIBRO%20PIETRO%20MASTRANGELO.webp'

      },
      {
          src: 'https://static.wixstatic.com/media/413b22_e02067f5aef34dccb00a4bae2c0c0b3c.jpg/v1/fill/w_240,h_379,al_c,q_80,usm_0.66_1.00_0.01/413b22_e02067f5aef34dccb00a4bae2c0c0b3c.webp'
      },
      {
          src: 'https://static.wixstatic.com/media/413b22_3b0915f37d694799af49da7934abf474.jpg/v1/fill/w_299,h_399,al_c,q_80,usm_0.66_1.00_0.01/413b22_3b0915f37d694799af49da7934abf474.webp'
      },
      {
          src: 'https://static.wixstatic.com/media/413b22_ada565ad6c074dbb95225c7b7a3a6383.gif'
      },
      {
          src: 'https://static.wixstatic.com/media/413b22_3aae0847dbf24c639f43ff2cafb4b2a2.jpg/v1/fill/w_248,h_399,al_c,q_80,usm_0.66_1.00_0.01/413b22_3aae0847dbf24c639f43ff2cafb4b2a2.webp'
      },
      {
          src: 'https://static.wixstatic.com/media/413b22_9d3bd7e7ef8e44549b4341180a1f4e90.jpg/v1/fill/w_228,h_399,al_c,q_80,usm_0.66_1.00_0.01/413b22_9d3bd7e7ef8e44549b4341180a1f4e90.webp'
      },
      {
          src: 'https://static.wixstatic.com/media/413b22_04a5927233d445ec8a8cff54bfc7d454~mv2_d_1448_2048_s_2.jpg/v1/fill/w_240,h_399,al_c,q_80,usm_0.66_1.00_0.01/413b22_04a5927233d445ec8a8cff54bfc7d454~mv2_d_1448_2048_s_2.webp'
      }
  ]
  
}
</script>

<style lang="scss">







</style>