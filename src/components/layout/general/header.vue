
<template>
    <header :elevation="7">  
        <img
          alt="Vuetify Logo"
          class="logo"
          src="@/assets/logo.png"
          transition="scale-transition"
          
        />
        <ul>
          <div class="link" v-for="(link,i) in $t('header.links')" :key="i">
               <li>{{link.title}}</li> 
               <div class="link__submenu" v-if="link.submenu" :elevation="7">
                   <ul>
                       <li v-for="(subLink,k) in link.submenu" :key="k" >
                            <router-link :to="`/${$i18n.locale}/hey`">{{subLink.title}}</router-link>
                       </li>
                   </ul>
               </div>
          </div>  
        </ul>
          <Selector></Selector>
          
      </header>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import Selector from '@/components/Selector.vue'

@Component({
    components:{
        Selector,
    }
})
export default class Header extends Vue {
}
</script>

<style lang="scss">

</style>
