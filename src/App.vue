<template>
  <v-app>
      <Layout>
            <transition
              name="fade"
              mode="out-in"
              class="transition"
            >
                <router-view />
            </transition>
            
      </Layout>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Layout from './components/layout/Layout.vue'
@Component({
    components: {
      Layout
    }
})
export default class App extends Vue {

    
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
    a{
          text-decoration: none;  
          padding: 10px 15px;
          border-radius: 26px;
          border: 3px solid #5A7DDF;
          font-weight: 600;
          margin: 10px;
          box-shadow: 0 2.5px 5px rgba(black,.3);
          &.button-primary{
          background-color: #5A7DDF;
          color: black !important;     
          }
          &.button-secondary{
            border-color: #fff;
            background-color: transparent;
            color: #fff;
          }
    }
}
h1{
    font-size: 50px;
    color: #fff; 
    letter-spacing: 8px;
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