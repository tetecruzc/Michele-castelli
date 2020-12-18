<template>
    <footer class="footer">
       <div class="footer__social">
            <div class="social">
                <SvgIcon name="icon-facebook" styles="social__icon"/>
            <a href="https://www.facebook.com/castellimika" target="_blank">castelliMika</a>
            </div>
            <div class="social">
                <SvgIcon name="icon-mail" styles="social__icon"/>
            <a href="">castellimika@yahoo.es</a>
            </div>
            <div class="social">
                <SvgIcon name="icon-twitter" styles="social__icon"/>
            <a href="https://twitter.com/castellimika" target="_blank">castelliMika</a>
            </div>
       </div>
       <div class="footer__line"></div>
       <div class="footer__copyright">&copy; Stephanie Cruz. 2020</div>
    </footer>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import SvgIcon from '@/components/general/SvgIcon.vue';
@Component({
    components:{
        SvgIcon
    }
})
export default class Footer extends Vue {
   
}
</script>

<style>

</style>