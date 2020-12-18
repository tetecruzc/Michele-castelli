<template>
            <div class="gallery-image flex y-center x-center">
                <div class="flex x-center">
                    <img :src="getImage" alt="">
                </div>
                <div class=" flex column x-center y-center" >
                     <div class="subtitle">
                            <div class="line "></div>
                            <SvgIcon :name="'pen'" styles='icon  icon-small icon-secondary' :externalIcon="'pen.svg'"/>
                            <div class="line "></div>
                        </div>
                        <p>{{item.text}}</p>                     
                </div>
            </div>
</template>

<script lang="ts">
import {Component,Prop} from 'vue-property-decorator';
import Vue from 'vue';
import firebase from 'firebase'
import SvgIcon from '@/components/general/SvgIcon.vue';
@Component({
   components:{
       SvgIcon
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