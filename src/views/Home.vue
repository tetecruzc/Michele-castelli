<template>
    <div>
    <v-carousel 
            
            hide-delimiter-background
            show-arrows-on-hover>
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              >
                <div class="title-container" v-if="item.primary">
                  <h1>Michele Castelli</h1> 
                  
                    <div class="subtitle">
                        <div class="line"></div>
                        <div class="text">Venezuela</div>
                        <div class="line"></div>
                    </div>
                    <a href="#section-contact" class="button button__primary mt-small">{{$t('contactMe')}}</a>
                </div>
                <div class="loque" v-else>
                    
                </div>
              </v-carousel-item>
    </v-carousel>
    <section class="section-about">
       <div class="about-image-container">
           <div class="square square--cut"></div>
           <div class="image">
               <img src="@/assets/images/scrittore.jpg" alt="">
           </div>
            <div class="square square--full"></div>
       </div>
      <div class="text-container">
          <div class="subtitle">
              <div class="line"></div>
              <div class="text">{{$t('about.subtitle')}}</div>
              <div class="line"></div>
          </div>
          <div class="title-primary">{{$t('about.title')}}</div>
          <div class="description">
              {{$t('about.description[0]')}}
          </div>
      </div>
    </section>
    <section class="section-about section-about--reverse">
        <div class="about-image-container">
           <div class="square square--cut"></div>
           <div class="image"><img src="@/assets/images/scrittore-2.png" alt=""></div>
            <div class="square square--full"></div>
       </div>
      <div class="text-container">
         <div class="subtitle">
              <div class="line"></div>
              <SvgIcon :name="'icon-quotes-left'" styles='icon icon-primary'/>
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
           <div class="image">
               <img src="@/assets/images/scrittore-3.png" alt="">
           </div>
            <div class="square square--full"></div>
       </div>
      <div class="text-container">
          <div class="subtitle">
              <div class="line"></div>
               <SvgIcon :name="'icon-quotes-left'" styles='icon icon-primary icon--rotated'/>
              <div class="line"></div>
          </div>
          <div class="description">
              {{$t('about.description[2]')}}
          </div>
      </div>  
    </section>
    <section class="section-plays pt-medium">
          <div class="title-primary mb-medium">{{$t('topBooks')}}</div>
          
            <v-slide-group
            multiple
            show-arrows
            >
            <v-slide-item
                v-for="(n,index) in books"
                :key="index"
                v-slot="{ active}"
            >
                <div class="book-card"  :input-value="active">
                    <img :src="n.src" alt="">
                    <div class="card-info">
                        <a class="button button__secondary" href="#"> Leer mas &rarr;</a>
                    </div>
                </div>
            </v-slide-item>
            </v-slide-group>
       
    </section>
     <section class="section-video">
            <div class="video-container">
                <Video source="https://www.youtube.com/embed/rqLUdyDADJ4?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"/>
            </div>
            <div class="text-content">
                <div class="title-primary">Intervista RAI TG Molise onorificenza Ambasciatore dei Molisani nel Mondo</div>
                <div class="text-content__info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, qui delectus? Harum doloremque fuga libero consequatur cumque quisquam ut voluptatum. Dicta eum error cum praesentium atque, sapiente officia eaque dolorem!</p>
                    <a class="button button__secondary" href="#">Ver entrevistas &rarr;</a>
                </div>
            </div>
    </section>
    <section class="section-contact" id="section-contact">
        <form  @submit.prevent="submitForm" class="form-book">
            <div class="content">
                <div class="title-primary">{{$t('messageMe')}}</div>
                <div class="subtitle">
                    <div class="line"></div>
                        <SvgIcon :name="'pen'" styles='icon  icon-small icon-secondary' :externalIcon="'pen.svg'"/>
                    <div class="line"></div>
                </div>
            <v-text-field
            label="Su nombre"
            filled
            prepend-inner-icon="mdi-account"
            v-model="name"
          ></v-text-field>
            <v-textarea
            filled
            name="input-7-4"
            label="Su mensaje"
            prepend-inner-icon="mdi-android-messages"
            v-model="message"
            rows="2"
            row-height="20"
            ></v-textarea>
             <a class="button button__secondary" href="#"> Enviar mensaje</a>
            </div>
        </form>
    </section>
    <footer class="footer">
       <div class="footer__social">
            <div class="social">
                <SvgIcon name="icon-facebook" styles="social__icon"/>
            <a href="https://www.facebook.com/castellimika" target="_blank">castelliMika</a>
            </div>
            <div class="social">
                <SvgIcon name="icon-mail" styles="social__icon"/>
            <a href="">castellimika@yahoo.es</a>
            </div>
            <div class="social">
                <SvgIcon name="icon-twitter" styles="social__icon"/>
            <a href="https://twitter.com/castellimika" target="_blank">castelliMika</a>
            </div>
       </div>
       <div class="footer__line"></div>
       <div class="footer__copyright">&copy; Stephanie Cruz. 2020</div>
    </footer>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import axios from "axios";
import SvgIcon from '@/components/general/SvgIcon.vue';
import Video from '@/components/general/Video.vue';
@Component({
   components:{
    SvgIcon,
    Video
   }
})
export default class Home extends Vue {
  //public model: 
  
  public name = '';
  public message = '';
  public endpoint: string = 'https://formspree.io/stephaniecruzcastelli@gmail.com';
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
  async submitForm() {
      window.alert(this.name);
      const data = {
        name: this.name,
        message: this.message,
      }
      await axios.post(this.endpoint, data)
    }
}
</script>

<style lang="scss">

.footer{
    height: max-content;
    background-color: #161616;
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    color: #b9b9b9 !important;
    &>*{
        margin:10px auto;
    }
    &__line{
        width: 80%;
        height: 0.5px;
        background-color: #848484;
        opacity: 0.1;
       
    }
    &__copyright{
        font-size: 14px;
    }
    &__social{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        
       
        .social{
            margin: 0 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all .3s;
            &>*{
                transition: all .3s;
            }
             &:hover{     
                  transform: scale(1.05);     
                &>*{
                    fill: #fff;
                    color: #fff;
                   
                } 
            }
            &__icon{
                position: relative;
                fill: #848484;
                width: 20px;
                height: 20px;
                margin: 0 10px;
            }
            a{
                text-decoration: none;
                color: #848484 ;
            }
        }
    }
}
.section-video{
    padding-top: 100px !important;
    padding-bottom: 100px !important;
    background-image: linear-gradient(180deg, black 0%, transparent 40%, white 100%), url(../assets/images/threes-inverted.png);
    background-position: center;
    background-size: cover;
    display: flex;
    &>*{
        width: 50%;
    }
    .title-primary{
        color: #fff !important;
        font-size: 20px !important;
    }
    .text-content{
        padding: 10px 30px;
        &__info{
            margin-top: 40px;
            padding: 20px;
            background-image: linear-gradient(to right, rgba(0,0,0,.3) 0%, rgba(0,0,0,.3) 100%);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            p{
            text-align: center;
            color: white;
        }
        }
    }
}
.video-container{
    width: 650px;
}
.section-plays{
    background-image: linear-gradient(180deg, white 0%, transparent 40%, black 100%), url(../assets/images/threes.png);
    background-position: center;
    background-size: cover;

    height: 500px;
    width: 100%;
    .v-item-group{
    .v-icon.v-icon{
        font-size: 40px !important;
        color: white;
    }
}
}


</style>