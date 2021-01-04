<template>
    <div class="book-detail">
        <div class="book-detail__banner">
            <div class="content">                
                    <h3>{{book.name}}</h3>
                    <div class="button button__secondary" @click.prevent="downloadPdf">{{$t('download')}}
                        <SvgIcon name="icon-download" styles="icon"/>
                    </div>             
            </div>   
        </div>
       <div class="book-detail__content" >
            <img :src="getImageUrl()" />
            <div class="description">
                    <div v-if="book.description" class="">
                        <p v-for="(text,index) in (book.show.position+1)" :key="index" :style="'text-align:' + book.description[index].position +';'">{{$t(book.description[index].text)}}</p> 
                    </div>
                    <div v-if="!show && book.description[book.show.position+2]" class="button button__terciary" @click="showContent" >Leer más +</div>
                   <v-fade-transition>
                        <div v-if="show">
                            <p v-for="(item,i) in getOcultedTextsLength()" :key="i" :style="'text-align:' + item.position +';'">
                                {{$t(book.description[i].text)}} 
                            </p>
                        </div>   
                    </v-fade-transition> 
                    <div v-if="show" class="button button__terciary" @click="hideContent" >Ocultar texto</div>
            </div>
        </div>
 <!--       
<div v-if="book.gallery" class="" style="background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(/img/sea2.58e88852.png);
height: 300px;
background-position: center;
background-size: cover; position: relative;">

        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; top:0; left:0;" viewBox="0 0 1440 160"><defs><clipPath id="_clipPath_NKnGAJW6HRySaiom2elVNNGwMLX4Vfjz"><rect x="0" y="0" width="1440" height="160"/></clipPath></defs><g clip-path="url(#_clipPath_NKnGAJW6HRySaiom2elVNNGwMLX4Vfjz)"><path d=" M 0 160 L 480 32 L 960 128 L 1440 32 L 1440 0 L 960 0 L 480 0 L 0 0 L 0 160 Z " fill="#fff"/></g></svg>
        <svg style="position: absolute;
bottom: -1px;
left: 0;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="-2.5 160 1445 160" ><defs><clipPath id="_clipPath_AC2Zz2S87LfHDE0mzWAhzGT6pN2wUpbH"><rect x="-2.5" y="160" width="1445" height="160"/></clipPath></defs><g clip-path="url(#_clipPath_AC2Zz2S87LfHDE0mzWAhzGT6pN2wUpbH)"><path d=" M -2.5 231.111 L 479.167 160 L 960.833 213.333 L 1442.5 160 L 1442.5 320 L 960.833 320 L 479.167 320 L -2.5 320 L -2.5 231.111 Z " fill="#fff"/></g></svg>
        </div> -->
        <div v-if="book.gallery" class="book-detail__gallery">
                <v-carousel>
                    <v-carousel-item v-for="(item,i) in book.gallery" :key="i">
                        <div class="gallery-content" style="">
                            <SquaredImage :image="getGalleryImg(i)" :small="true" />
                            <div class="" style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
                               <!-- <div class="subtitle">
                                    <div class="line"></div>
                                        <SvgIcon :name="'feather'" styles='icon icon-primary' />
                                    <div class="line"></div> 
                                </div> -->
                                <p style="font-weight: 500;">{{item.text}}</p>
                            </div>      
                        </div>
                        
                    </v-carousel-item>
                </v-carousel>   
                <div class="circle circle--reverse"></div>
        </div>
    </div> 
</template>


<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import {books} from '@/collections/books.ts';
import firebase from 'firebase';
import SvgIcon from '@/components/general/SvgIcon.vue';
import SquaredImage from '@/components/general/SquaredImage.vue';
@Component({
    components:{
       SvgIcon,
       SquaredImage
    }
})
export default class BookDetail extends Vue {
   book: any ={};
   id : string = '';
   storage = firebase.storage();
   url = ''
   gallery : Array<string> =[]
   show = false;
   
   created(){
       this.id = this.getId();             
       this.book = books.filter((el: { id: number; }) => el.id === Number(this.id))[0]
       this.storage.ref(`obras/${this.book.id}/${this.book.id}.png`).getDownloadURL().then((url)=>{
            this.url = url
       })    
       if (this.book.gallery){
            for (var i=0;i<this.book.gallery.length;i++){
                this.storage.ref(`obras/${this.book.id}/gallery/${i+1}.png`).getDownloadURL().then((url)=>{
                    this.gallery.push(url)
                })            
            } 
        }   
   }

   getOcultedTextsLength(){
       return  this.book.description.length - this.book.show.position 
   }

    getGalleryImg(id: number){
       return this.gallery[id]
    }

    showContent(){
        this.show = true;
    }

    hideContent(){
        this.show = false;
    }

   getId(){
       return this.$route.params.id;
   }
   
   getImageUrl() : string{
       return this.url;
   }

    downloadPdf() {
        const resumeRef = this.storage.ref('obras/1/1.pdf');
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

<style lang="scss">
.book-detail__gallery{
    .v-responsive__content{
       // background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(/img/sea2.58e88852.png);
      //  background-position: center;
       // background-size: cover;
       // clip-path: polygon(0 10%, 33.33% 0, 66.66% 10%, 100% 0, 100% 100%, 0% 100%);
       // position: relative;
    }
}
</style>