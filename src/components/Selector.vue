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
 .image-container{
            width: 20px;
            height: 20px;
            overflow: hidden;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 10px;
            img{
                width: 100%;
                transform: scale(1.6);
            }
        }



.select-box {
  position: relative;
  display: block;
  width: 150px;
  height: 60px;
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
  font-size: 18px;
  color: #60666d;
  box-shadow: 0 2.5px 5px rgba(0,0,0,.2);
 
  ul{
      display: flex;
      flex-direction: column;
      li{
          display: flex;
      }
  }
  &__current {
    position: relative;
    box-shadow: 0 15px 30px -10px transparentize(#000, 0.9);
    cursor: pointer;
    outline: none;
    height: 100%;
    &:focus {
      & + .select-box__list {
        opacity: 1;

        // We have to set "animation-name: none;" to make the list visible (read below how it works)

        animation-name: none;
        
        .select-box__option {
          cursor: pointer;
        }
      }
      
      .select-box__icon {
        transform:  rotate(180deg);
      }
    }
  }
  
  &__icon {
    width: 30px !important;
    height: 30px !important;
    position: absolute;
    right: 0;
    top: 25%;
    transition: 0.2s ease;
  }
  
  &__value {
    display: flex;
    height: 100%;
    position: absolute;
  }
  
  &__input {
    display: none;
    
    &:checked + .select-box__input-text {
      display: flex;
      align-items: center;
    }
  }
  
  &__input-text {
    display: none;
    width: 100%;
    padding: 15px;
    background-color: #fff;
    p{
        margin-bottom: 0 !important;
    }
  }
  
  &__list {
    position: absolute;
    width: 100%;
    padding: 0 !important;
    list-style: none;
    opacity: 0;
    li{
        width: 100%;
    }
    // We need to use animation with delay.
    // Otherwise the click event will not have time to run on label, because this element disapears immediately when .select-box__current element loses the focus.
    // This delay will not be noticed because we set "opacity" to "0".
    // We also use "animation-fill-mode: forwards" to make the list stay hidden.
    animation-name: HideList;
    animation-duration: 0.5s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: step-start;
    box-shadow: 0 15px 30px -10px transparentize(#000, 0.9);
  }
  
  &__option {
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: #fff;
    transition: all .3s;
    &:hover,
    &:focus {
      color: #546c84;
      background-color: rgb(209, 209, 209);
    }
  }
}

  @keyframes HideList {
    from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(0);
    }
  }
</style>