<template>
    <div class="squared-image">
           <div :class="small === true ? 'square  square--cut square--small' :  horizontal === false ? 'square square--cut square--vertical' : 'square square--cut'"></div>
           <div :class=" small === true ? 'image image--small' : 'image'">
               <img :src="image" alt="" :class="horizontal == false ?  'image--vertical' : ''">
           </div>
           <div :class=" small === true ? 'square square--full square--small' :  horizontal === false ? 'square square--full square--vertical' : 'square square--full'"></div>
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