<template>
    <div class="gallery-content" style="">
        <SquaredImage :image="getImage" :small="true" />
        <div class="" style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
            <div class="subtitle">
                <div class="line"></div>
                    <SvgIcon :name="'feather'" styles='icon icon-primary' />
                <div class="line"></div> 
            </div> 
            <p style="font-weight: 500;">{{$t(item.text)}}</p>
            <div class="flex column x-center y-center" style="width:100%;">
                <div class="ma-smallest" v-for="(i,index) in item.links" :key="index">
                    <div class="button button__secondary" @click.prevent="downloadPdf('other',i.id)">{{$t(i.text)}}</div>
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
import SquaredImage from '@/components/general/SquaredImage.vue';
@Component({
   components:{
       SvgIcon,
       SquaredImage
   }
})
export default class BookGalleryCard extends Vue {
    @Prop() item! : any;
    @Prop() imageId! : number;
    @Prop() id! : number;
    image : string = '';
    storage = firebase.storage();

     get getImage(){  
        this.storage.ref(`obras/${this.id}/gallery/${this.imageId}.png`).getDownloadURL().then((url)=>{
           this.image =  url
        })
      return this.image;
    }   

    downloadPdf(type : string, id : any) {
        var resumeRef = this.storage.ref(`otros/${id}.pdf`);
        
        resumeRef.getDownloadURL().then((url) => {
                var link = document.createElement('a');
                link.href = url;
                link.target= "_blank"
                link.dispatchEvent(new MouseEvent('click'));

        }).catch(() => {
        });
    }
}

</script>


<style scoped lang="scss">

</style>