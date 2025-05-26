<template>
    <div class="">
        <BannerTitled  title="interviews" subtitle="fromMichele"/>
      
        <SectionVideo :videos="interviews"/>
    </div>
</template>

<script lang="ts">
import { interviews } from '@/collections/interviews';
import BannerTitled from '@/components/general/BannerTitled.vue';
import SectionVideo from '@/components/general/SectionVideo.vue';
import SvgIcon from '@/components/general/SvgIcon.vue';
import Video from '@/components/general/Video.vue';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    components:{
        BannerTitled,
        Video,
        SvgIcon,
        SectionVideo,
    }
})
export default class Interviews extends Vue { 
    interviews : Record<any,any> = []
    created(){
        this.interviews = interviews.slice().reverse();
    }
}

</script>

<style scoped lang="scss">


</style>