<template>
    <v-carousel           
            hide-delimiter-background        
            show-arrows-on-hover
            >
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              >
              <div class="title-container" v-if="item.primary">
                  <h1>{{item.title}}</h1> 
                    <div class="subtitle">
                        <div class="line"></div>
                        <div class="text">{{item.subtitle}}</div>
                        <div class="line"></div>
                    </div>              
                    <a to="" href="#section-contact" class="button button__primary mt-small">{{$t(item.btn)}}</a>                 
                </div>
               <!-- 
                <div class="quote" v-else>
                   <p>{{item.text}}</p>
                    <div class="subtitle">
                        <div class="line"></div>
                        <div class="text">{{item.subtitle}}</div>
                        <div class="line"></div>
                    </div>
                </div> -->
                <h2 style="margin-left: 5%; margin-top: 50px;">{{item.text}}</h2>
              </v-carousel-item>
    </v-carousel>
</template>


<script lang="ts">
import {Component,Prop} from 'vue-property-decorator';
import Vue from 'vue';

@Component({
   components:{
    
   }
})
export default class BannerCarousel extends Vue {
    @Prop() items! : Record<string,any>;
}

</script>