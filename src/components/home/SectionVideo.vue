<template>
    <section class="section-video">
            <div class="video-container">
                <Video :source="interviews[0].source"/>
            </div>
            <div class="text-content">
                <div class="title-primary">{{$t('interview.ambassador.title')}}</div>
                <div class="button-decorator">
                    <a class="button button__secondary" @click="goToUrl('Interviews')">{{$t('moreInterviews')}} &rarr;</a>
                </div>
            </div>
    </section>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import Video from '@/components/general/Video.vue';
import {interviews} from '@/collections/interviews';
@Component({
   components:{
       Video
   }
})
export default class SectionVideo extends Vue {
   interviews : Record<any,any> = []
   created(){
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
</style>