<template>
    <div class="book-detail__banner flex x-center y-center">
        <div class="all-books">
            <h3>{{$t(title)}}</h3>
            <div class="subtitle hide-on-tab-phone">
                <div class="line line__light"></div>
                <div class="text text__light">{{$t(subtitle)}}</div>
                <div class="line line__light"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component,Prop} from 'vue-property-decorator';
import Vue from 'vue';

@Component({
    components:{
       
    }
})
export default class BannerTitled extends Vue { 
    @Prop() title? : string;
    @Prop() subtitle? : string;
}

</script>