<template>
    <div>
          <div class="title-primary mb-medium">{{$t(title)}}</div>     
            <v-slide-group
            multiple
            show-arrows="always"
            >
            <v-slide-item
                v-for="(n,index) in items"
                :key="index"   
            >   
                <BookCard :item="n"   />
            </v-slide-item>
            </v-slide-group>
    </div>
   
</template>

<script lang="ts">
import {Component,Prop} from 'vue-property-decorator';
import Vue from 'vue';

import BookCard from '@/components/cards/BookCard.vue';
@Component({
   components:{
       BookCard
   }
})
export default class GroupCarousel extends Vue {
    @Prop() items!: Record<string,any>;
    @Prop() title?: string;

}
</script>

<style scoped>
   .v-slide-group__prev, .v-slide-group__prev--disabled, .v-slide-group__next, .v-slide-group__next--disabled{
       display: block !important;
   }

</style>