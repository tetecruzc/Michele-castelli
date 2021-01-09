<template>
<div class="">
        <BannerTitled  :title="getTitleByFilterName" subtitle="fromMichele"/>
        <div class="book-detail__gallery section-decorator"> <!--gallery-->
            <v-carousel  hide-delimiters>
                        <v-carousel-item
                        v-for="(item,index) in getImages"
                        :key="index"
                        >
                        <GalleryCard  :category="filter" :item="item"/>
                        </v-carousel-item>
                </v-carousel>
                <div class="circle circle--reverse"></div>
        </div>         
</div>
</template>

<script lang="ts">
import {Component,Watch} from 'vue-property-decorator';
import Vue from 'vue';
import BannerTitled from '@/components/general/BannerTitled.vue';
import GalleryCard from '@/components/cards/GalleryCard.vue';
import {GalleryFilters} from "@/collections/filters";
import firebase from 'firebase';

@Component({
    components:{
        BannerTitled,
        GalleryCard
    }
})
export default class Gallery extends Vue { 

    filter : string =''
    storage = firebase.storage();
   

    created() { 
        this.filterImages()
         
    }

    @Watch('$route')
    watchRoute(){
       this.filterImages();
    }

    get getTitleByFilterName() : string {
        for (var i=0;i<Object.values(GalleryFilters).length;i++){
            if (Object.values(GalleryFilters)[i] === this.filter){
                return 'filteredPhotos.'+ this.filter
            }
        }
        return ''
    }

    filterImages(){
            this.filter = this.$route.params.filter;          
    }

    get getImages(){    
      return  this.$t(`galleryImages[${Number(this.filter)-1}].photos`)
    }
}

</script>

<style>
.v-responsive__content{
    display: flex !important;
justify-content: center;
align-items: center;
padding: 40px 0 !important;
height: 100%;
background-color: transparent;
}
</style>