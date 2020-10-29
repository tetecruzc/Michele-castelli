<template>
    <div>
    <v-carousel 
            cycle        
            hide-delimiter-background
            show-arrows-on-hover>
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              >
                <div class="title-container" v-if="item.primary">
                  <h1>Michele Castelli</h1>
                  <div class="line"></div>
                  <h2>Venezuela</h2>
              <!--<div class="btn-container">
                    <a class="button-primary" href="#">Obras populares</a>
                    <a class="button-secondary" href="#">Sobre mi</a>
                    {{$t('hello')}}
                  </div> -->
                </div>
                <div class="loque" v-else>
                </div>
              </v-carousel-item>
    </v-carousel>
    <section class="section-about">
       <div class="about-image-container">
           <div class="square square--cut"></div>
           <img src="@/assets/images/scrittore.jpg" alt="">
            <div class="square square--full"></div>
       </div>
      <div class="text-container">
          <div class="subtitle">
              <div class="line"></div>
              <div class="text">{{$t('about.subtitle')}}</div>
              <div class="line"></div>
          </div>
          <div class="title">{{$t('about.title')}}</div>
          <div class="description">
              {{$t('about.description[0]')}}
          </div>
      </div>
    </section>
    <section class="section-about section-about--reverse">
        <div class="about-image-container">
           <div class="square square--cut"></div>
           <img src="@/assets/images/scrittore-2.png" alt="">
            <div class="square square--full"></div>
       </div>
      <div class="text-container">
         <div class="subtitle">
              <div class="line"></div>
              <SvgIcon :name="'icon-quotes-left'" styles='icon'/>
              <div class="line"></div>
          </div>
          <div class="description">
              {{$t('about.description[1]')}}
          </div>
      </div>
      
    </section>
    <section class="section-about">
        <div class="about-image-container">
           <div class="square square--cut"></div>
           <img src="@/assets/images/scrittore-3.png" alt="">
            <div class="square square--full"></div>
       </div>
      <div class="text-container">
          <div class="subtitle">
              <div class="line"></div>
               <SvgIcon :name="'icon-quotes-left'" styles='icon icon--rotated'/>
              <div class="line"></div>
          </div>
          <div class="description">
              {{$t('about.description[2]')}}
          </div>
      </div>  
    </section>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import SvgIcon from '@/components/general/SvgIcon.vue';
@Component({
   components:{
    SvgIcon
   }
})
export default class Home extends Vue {
  public items: Record<string,any> =[
          {
            src: require('@/assets/images/background.jpg'),
            primary: true
          },
          {
            src: require('@/assets/images/venice.png'),
          },
          {
            src: require('@/assets/images/vatican.png'),
          }
        ]
}
</script>

<style lang="scss">


</style>