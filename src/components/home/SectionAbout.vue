<template v-on:scroll.passive="viewScroll">
    <section :class=" reverse === true ? 'section-about section-about--reverse' : 'section-about' ">           
            <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeInRight">
                <SquaredImage v-if="show" :image="about.src" :horizontal="about.position == 'horizontal' ?  true : false" />
            </transition>   
            <div class="text-container">
                <div class="subtitle">
                    <div class="line"></div>    
                    <div class="text" v-if="about.about.subtitle">{{$t(about.about.subtitle)}}</div>
                    <SvgIcon v-else :name="about.icon" :styles=" reverse === false ? 'icon icon-primary icon--rotated' : 'icon icon-primary' "/>
                    <div class="line"></div>
                </div>
                <div class="title-primary">{{$t(about.about.title)}}</div>
                <div class="description">
                    {{$t(about.about.description)}}
                </div>
            </div>
            <div :class=" reverse === true ? 'circle circle--reverse' : 'circle' "></div>
    </section>
</template>

<script lang="ts">
import {Component,Prop} from 'vue-property-decorator';
import Vue from 'vue';
import SvgIcon from '@/components/general/SvgIcon.vue';
import SquaredImage from '@/components/general/SquaredImage.vue';
@Component({
   components:{
       SvgIcon,
       SquaredImage
   }
})
export default class SectionAbout extends Vue {
    @Prop() about!: Object;
    @Prop() reverse?: boolean;
    show = false;
 /* test(e: any){
      //  console.log(e.target)
    } */
    mounted(){
        this.show =true
       // document.addEventListener('scroll', this.test)
    } 
    viewScroll(){
        console.log('scrolling');
    }

}
</script>