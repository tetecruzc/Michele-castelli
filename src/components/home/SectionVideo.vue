<template>
    <section class="section-video section-decorator">
            <div class="video-container">
                <Video :source="interviews[0].source"/>
            </div>
            <div class="text-content">
                <div class="title-primary--small mb-md">{{$t('interview.ambassador.title')}}</div>
                <!-- <div class="button-decorator"> -->
                    <a class="amazon-button" @click="goToUrl('Interviews')">{{$t('moreInterviews')}} &rarr;</a>
                <!-- </div> -->
            </div>
    </section>
</template>

<script lang="ts">
import { interviews } from '@/collections/interviews';
import Video from '@/components/general/Video.vue';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
@Component({
   components:{
       Video
   }
})
export default class SectionVideo extends Vue {
   interviews : Record<any,any> = []
    created() {
    this.interviews = interviews
}

   goToUrl(url: string){
        this.$router.push({
                name: url
        }).catch(()=>{});
   }
}
</script>


<style scoped>
.video-container{
    width: 650px;
}
.mb-md {
    margin-bottom: 20px;
}
</style>