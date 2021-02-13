<template>
    <div class="">
        <BannerTitled  title="interviews" subtitle="fromMichele"/>
      
        <SectionVideo :videos="interviews"/>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import BannerTitled from '@/components/general/BannerTitled.vue';
import Video from '@/components/general/Video.vue';
import {interviews} from '@/collections/interviews';
import SvgIcon from '@/components/general/SvgIcon.vue';
import SectionVideo from '@/components/general/SectionVideo.vue';

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
        this.interviews = interviews
    }
}

</script>

<style scoped lang="scss">


</style>