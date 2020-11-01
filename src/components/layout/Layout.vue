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
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import Footer from './general/footer.vue';
import Header from './general/header.vue';
import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
    components: {
        Footer,
        Header
    }
})
export default class Layout extends Vue {
   
}
</script>

<style>
.push-footer {
    min-height: calc(100vh - 120px);
}
</style>
