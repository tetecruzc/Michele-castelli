<template>
    <div>
        <BannerCarousel class="hide-on-tab-port" :items="items"/>
        <Banner class="show-on-tab-port" :item="items[0]"/>
        <DiasporaPromotion/>
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
import { books } from '@/collections/books';
import Banner from '@/components/general/Banner.vue';
import BannerCarousel from '@/components/general/BannerCarousel.vue';
import GroupCarousel from '@/components/general/GroupCarousel.vue';
import ContactForm from '@/components/home/ContactForm.vue';
import DiasporaPromotion from '@/components/home/DiasporaPromotion.vue';
import SectionAbout from '@/components/home/SectionAbout.vue';
import SectionVideo from '@/components/home/SectionVideo.vue';
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
   components:{
    BannerCarousel,
    SectionAbout,
    GroupCarousel,
    DiasporaPromotion,
    SectionVideo,
    ContactForm,
    Banner
   }
})
export default class Home extends Vue {
  //public model: 
  TopBooks : any = []
  created(){
      this.TopBooks = books.filter((el: { top: boolean; }) => el.top);
  }
  public items: Record<string,any> =[
          {
            src: require('@/assets/images/background.jpg'),
            primary: true,
            title: 'Michele Castelli',
            description: 'bannerDescription',
            subtitle: 'Venezuela',
            btn: 'contactMe'
          },
          {
            src: require('@/assets/images/venice.png'),
            text: 'Venezia, Italia',
          },
          {
            src: require('@/assets/images/venezuela-2.jpg'),
            text: 'Caracas, Venezuela'
          },
          // {
          //   src: require('@/assets/images/vatican.png'),
          //   text: 'Firenze, Italia',
          // },
          //  {
          //   src: require('@/assets/images/santo-angel.jpg'),
          //   text: 'El salto ángel, Venezuela'
          // }
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
  
}
</script>

