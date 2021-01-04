<template>
    <div class="banner">
        <div class="title-container" >
            <div class="subtitle">
                <div class="line"></div>
                <div class="text">{{item.subtitle}}</div>
                <div class="line"></div>
            </div>              
            <a to="" href="#section-contact" class="button button__primary mt-small">{{$t(item.btn)}}</a>                 
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
export default class Banner extends Vue {
    @Prop() item! : any;

}

</script>