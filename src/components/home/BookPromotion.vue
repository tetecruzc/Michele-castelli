<template>
    <section  style="padding-top:50px !important;">           

    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
   components:{
   }
})
export default class SectionAbout extends Vue {
    @Prop() about!: Object;
    @Prop() reverse?: boolean;
    show = false;
 /* test(e: any){
      //  console.log(e.target)
    } */
    mounted(){
        this.show =true
       // document.addEventListener('scroll', this.test)
    } 
}
</script>
