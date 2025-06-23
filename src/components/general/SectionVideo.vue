<template>
    <div class="">
        <section :style=" index % 2 != 0 ? 'flex-direction:row-reverse;' : ''" v-for="(video,index) in videos" :key="index" class="interview">
                 <div class="text-container">
                    <div class="subtitle">
                        <div class="line"></div>
                       <div class="text">{{$t(video.date)}}</div> 
                       <!--  <SvgIcon  name="feather" styles="icon icon-primary"/> -->
                        <div class="line"></div>
                    </div>
                    <div class="title-primary--small mt-small">{{$t(video.title)}}</div>
                    <div class="description">
                        {{$t(video.text)}}
                    </div>
                    <div v-if="video.link" class="button-decorator button-decorator--small">
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
import SvgIcon from '@/components/general/SvgIcon.vue';
import Video from '@/components/general/Video.vue';
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component({
    components:{
        Video,
        SvgIcon
    }
})
export default class SectionVideo extends Vue { 
   @Prop() videos! : any;
}

</script>

<style scoped lang="scss">


</style>