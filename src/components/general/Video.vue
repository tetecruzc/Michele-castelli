<template>
    <div class="video-iframe-container">
        <iframe width="100%" height="100%" :src="source">
        </iframe>
      </div>  
</template>

<script lang="ts">
import {Component,Prop} from 'vue-property-decorator';
import Vue from 'vue';
@Component({})
export default class Video extends Vue {
    @Prop() source! : string;
}
</script>

<style lang="scss" scoped>
.video-iframe-container{
      position: relative;
      width: 100%;
      overflow: hidden;
      padding-top: 56.25%; /* 16:9 Aspect Ratio */
      iframe{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: none;
      }
    }
</style>