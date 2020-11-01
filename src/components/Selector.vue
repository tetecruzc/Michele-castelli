<template>


<div class="select-box">
  <div class="select-box__current" tabindex="1">
    <div v-for="(item,i) in $i18n.availableLocales" :key="i" class="select-box__value" >
      <input class="select-box__input" type="radio" :id="i"  name="Ben" :checked="item === $i18n.locale ? 'checked' : '' "/>
      <div  class="select-box__input-text">
          <div class="image-container">
              <img :src="getImgUrl(item)" alt="Arrow Icon" />
          </div>
          <p>{{item.toUpperCase()}}</p>
      </div>
    </div>
    
    <SvgIcon :name="'icon-arrow__down'" :styles="'select-box__icon'" />
  </div>
  <ul  class="select-box__list">
    <li class="select-box__option" v-for="(item,i) in $i18n.availableLocales" :key="i" @click="hey(item)">
      <div class="image-container">
              <img  :src="getImgUrl(item)" alt="" />
      </div>
      <label :for="i" aria-hidden="aria-hidden">{{item.toUpperCase()}}</label>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import SvgIcon from '@/components/general/SvgIcon.vue';
@Component({
    components:{
      SvgIcon
    }
})
export default class Selector extends Vue {


    setLocale(e: any){
        this.$router.push({
            params:{ lang: e.target.value}
        })
    }
    hey(selected: string){
        this.$i18n.locale = selected;
        this.$router.push({
            params:{ lang: selected}
        })
    }
    getImgUrl(pic: string) {
        return  require(`@/assets/flag-${pic}.png`);
    }
}
</script>

<style lang="scss">
</style>