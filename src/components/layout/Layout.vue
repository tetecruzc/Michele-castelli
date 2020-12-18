<template>
  <div>
    <Header></Header>
    <div class="push-footer">
      <v-fade-transition hide-on-leave>
        <v-main>
          <slot></slot>
        </v-main>
      </v-fade-transition>
    </div>
    <ScrollTopButton>
      <SvgIcon name="icon-arrow-up" styles="svg" />
    </ScrollTopButton>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
    import Footer from "./general/footer.vue";
    import Header from "./general/header.vue";
    import Component from "vue-class-component";
    import ScrollTopButton from "@/components/general/ScrollTopButton.vue";
    import SvgIcon from "@/components/general/SvgIcon.vue";
    import Vue from "vue";

    @Component({
    components: {
        Footer,
        Header,
        ScrollTopButton,
        SvgIcon,
    },
    })
    export default class Layout extends Vue {}
</script>

<style>
.push-footer {
  min-height: calc(100vh - 120px);
 /* width: 100vw;
  overflow: hidden; */
}
</style>
