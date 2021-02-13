<template>
  <v-app >
      <Layout>
            <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
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



</style>