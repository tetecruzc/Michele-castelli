<template>
    <div class="squared-image">
           <div :class="small === true ? 'square  square--cut square--small' : 'square  square--cut'"></div>
           <div :class=" small === true ? 'image image--small' : 'image'">
               <img :src="image" alt="" :style="horizontal == false ?  'height: 370px !important;' : ''">
           </div>
           <div :class="  small === true ? 'square square--full square--small' : 'square square--full'"></div>
    </div>
</template>



<script lang="ts">
import {Component,Prop} from 'vue-property-decorator';
import Vue from 'vue';

@Component({
    components:{
       
    }
})
export default class SquaredImage extends Vue {
    @Prop() image! : string;
    @Prop() small? : boolean;
    @Prop() horizontal? : boolean;
}
</script>