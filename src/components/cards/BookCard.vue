<template>
    <div class="book-card"  >
        <img :src="getImage(item.id)" alt="">          
        <div class="card-info">
            <div class="button button__secondary" href="#" @click="showDetail(item.id)">{{$t('btnMore')}}  &rarr;</div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component,Prop} from 'vue-property-decorator';
import Vue from 'vue';
import firebase from 'firebase'

@Component({
   components:{
   }
})
export default class BookCard extends Vue {
    @Prop() item! : any;
    image : string = '';
    storage = firebase.storage();
     showDetail(id: number){    
         this.$router.push({
                name: 'BooksDetail',
                params: { id: '' + id }
            }).catch(()=>{});
    }
     getImage(id: number){  
        this.storage.ref(`obras/${id}/${id}.png`).getDownloadURL().then((url)=>{
           this.image =  url
        })
      return this.image;
    }
}

</script>