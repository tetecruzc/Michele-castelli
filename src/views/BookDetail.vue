<template>
    <div class="book-detail">
        <div class="book-detail__banner">
            <div class="content">                
                    <h3>{{book.name}}</h3>
                    <div v-if="!book.noDigitized &&  !book.ignoreDownload" class="amazon-button" @click.prevent="downloadPdf('book', book.id)">{{$t('download')}}
                        <SvgIcon name="icon-download" styles="icon"/>
                    </div>
                    <a :href="book.buyLink" v-if="book.buyLink" target="_blank" class="amazon-button">Comprar en Amazon</a>
                    <div v-if="book.noDigitized" style="color:white; font-size:18px;">{{$t('noDigitalized')}}</div>             
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
                            <p v-for="(item,i) in getOcultedTextsLength()" :key="i" :style="'text-align:' + item +';'">
                                {{$t(book.description[i].text)}} 
                            </p>
                        </div>   
                    </v-fade-transition> 
                    <div v-if="show" class="button button__terciary" @click="hideContent" >Ocultar texto</div>
            </div>
        </div>
        <div v-if="book.gallery" class="book-detail__gallery">
                <v-carousel>
                    <v-carousel-item v-for="(item,i) in book.gallery" :key="i">
                        <BookGalleryCard :item="item" :id="id" :imageId="i+1"/>
                    </v-carousel-item>
                </v-carousel>
                <div class="circle"></div>
        </div>
        <SectionVideo v-if="book.videos"  :videos="book.videos" />
    </div> 
</template>


<script lang="ts">
import { books } from '@/collections/books.ts';
import BookGalleryCard from '@/components/cards/BookGalleryCard.vue';
import SectionVideo from '@/components/general/SectionVideo.vue';
import SquaredImage from '@/components/general/SquaredImage.vue';
import SvgIcon from '@/components/general/SvgIcon.vue';
import firebase from 'firebase';
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
    components:{
       SvgIcon,
       SquaredImage,
       BookGalleryCard,
       SectionVideo
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

    downloadPdf(type : string, id : any) {
        var resumeRef;
        if (type == "book"){
            resumeRef = this.storage.ref(`obras/${this.getId()}/${this.getId()}.pdf`);
        }
        else {
            resumeRef = this.storage.ref(`otros/${id}.pdf`);
        }
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
