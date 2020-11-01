<template>
  <v-app v-on:scroll.native="handleScroll">
      <Layout>
            <transition
              name="fade"
              mode="out-in"
              class="transition"
            >
                <router-view />
            </transition>
           
            <ScrollTopButton >
               <SvgIcon name="icon-arrow-up" styles="svg"/>
            </ScrollTopButton>
      </Layout>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Layout from './components/layout/Layout.vue'
import SvgIcon from './components/general/SvgIcon.vue';
import ScrollTopButton from './components/general/ScrollTopButton.vue';
@Component({
    components: {
      Layout,
      SvgIcon,
      ScrollTopButton
    }
})
export default class App extends Vue {

    handleScroll(){
      
    }
}
</script>
<style lang="scss">
@import '@/styles/main.scss';
.transition{
  transition: all 1s;
}

svg{
    width: 100%;
    position: absolute;
    bottom: -10%;
}
.xyz{
  width: 200px;
}
.v-image__image{
  background-position: right !important;
}
.loque{
  height: 250px;
  width: 550px;
  background-color: #fff;
  opacity: 0.6;
  position: absolute;
  top: 25%;
  left: 10%;
  
}
.title-container{
    position: absolute;
    top: 25%;
    left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
h1{
    font-size: 70px;
    color: #fff; 
    letter-spacing: 8px;
    font-weight: 100;
    font-family: 'Parisienne', cursive;
}
h2{
  font-size: 20px;
  letter-spacing: 10px;
  margin:20px 0;
}
.line{
width: 300px;
height: 1px;
background-color: brown
}
</style>