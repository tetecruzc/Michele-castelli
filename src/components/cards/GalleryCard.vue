<template>
            <div class="gallery-image flex y-center x-center">
                <div v-if="item.video" class="video-side flex x-center">
                    <Video :source="item.video"/>
                </div>
                <div v-else class="image-side flex x-center">               
                    <img :src="getImage" alt="">
                </div>
                <div class="text-side flex column x-center y-center" >
                     <div class="subtitle">
                            <div class="line "></div>
                            <!--<SvgIcon :name="'pen'" styles='icon  icon-small icon-secondary' :externalIcon="'pen.svg'"/>-->
                            <SvgIcon :name="'feather'" styles='icon icon-primary' />
                            <div class="line "></div>
                        </div>
                        <p>{{item.text}}</p>   
                        <div class="flex wrap x-center y-center" style="width:100%;">
                            <div class="ma-smallest" v-for="(i,index) in item.link" :key="index">
                                <a class="button button__secondary" :href="i.url" target="_blank" >{{i.text}}</a>
                            </div>    
                        </div>                  
                </div>
            </div>
</template>

<script lang="ts">
import {Component,Prop} from 'vue-property-decorator';
import Vue from 'vue';
import firebase from 'firebase'
import SvgIcon from '@/components/general/SvgIcon.vue';
import Video from '@/components/general/Video.vue';

@Component({
   components:{
       SvgIcon,
       Video
   }
})
export default class BookCard extends Vue {
    @Prop() category! : string;
    @Prop() item! : any;
    image : string = '';
    storage = firebase.storage();


     get getImage(){  
        this.storage.ref(`galeria/${this.category}/${this.item.id}.png`).getDownloadURL().then((url)=>{
           this.image =  url
        })
      return this.image;
    }
}

</script>


<style scoped lang="scss">

</style>