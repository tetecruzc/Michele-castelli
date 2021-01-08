<template>
    <div class="">
        <BannerTitled  title="interviews" subtitle="fromMichele"/>
        <section :style=" index % 2 != 0 ? 'flex-direction:row-reverse;' : ''" v-for="(video,index) in interviews" :key="index" class="interview">
                 <div class="text-container">
                    <div class="subtitle">
                        <div class="line"></div>
                       <div class="text">{{$t(video.date)}}</div> 
                       <!--  <SvgIcon  name="feather" styles="icon icon-primary"/> -->
                        <div class="line"></div>
                    </div>
                    <div class="title-primary">{{$t(video.title)}}</div>
                    <div class="description">
                        {{$t(video.text)}}
                    </div>
                    <div class="button-decorator button-decorator--small">
                       <a class="button button__secondary" :href="video.link.url" target="_blank" v-if="video.link" >{{$t(video.link.name)}}</a>
                    </div>
                </div>
                <div class="" style="width: 50%;max-width:700px;">
                     <Video :source="video.source"/>
                </div>   
                <div :class=" index % 2 != 0 ? 'circle' : 'circle circle--reverse'"></div>
        </section>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import BannerTitled from '@/components/general/BannerTitled.vue';
import Video from '@/components/general/Video.vue';
import {interviews} from '@/collections/interviews';
import SvgIcon from '@/components/general/SvgIcon.vue';
@Component({
    components:{
        BannerTitled,
        Video,
        SvgIcon
    }
})
export default class Interviews extends Vue { 
    interviews : Record<any,any> = []
    created(){
        this.interviews = interviews
    }
}

</script>

<style scoped lang="scss">


</style>