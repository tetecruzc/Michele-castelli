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
                  <div class="btn-container">
                    <a class="button-primary" href="#">Obras populares</a>
                  <a class="button-secondary" href="#">Sobre mi</a>
                    {{$t('hello')}}
                  </div>
                </div>
                <div class="loque" v-else>
                </div>
              </v-carousel-item>
    </v-carousel>
    <section>
       <div class="about-image-container">
           <div class="square square--cut"></div>
           <img src="@/assets/images/about.png" alt="">
            <div class="square square--full"></div>
       </div>
       <div class="hey"></div>
    </section>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
//import SvgIcon from '@/components/general/SvgIcon.vue';
@Component({
   components:{
       
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

section{
    background-image: url(../assets/images/background-dots.png);
    background-size: cover;
    background-repeat: no-repeat;
   // background-position: center;
    .about-image-container{
        position: relative;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            height: 250px;
            z-index: 3;
        }
        .square{
            position: absolute;
            height: 250px;       
            width: 250px;     
            z-index: 0;
            
        }
        .square--cut{
            background-color: #c4a486;
            clip-path: polygon(0% 0%, 0% 100%, 8% 100%, 8% 7%, 92% 7%, 92% 93%, 8% 93%, 8% 100%, 100% 100%, 100% 0%);
            transform: translate(-15%,-25%);
        }
        .square--full{
            background-color: #848484;
             transform: translate(25%,15%);
        }
    }
}


</style>