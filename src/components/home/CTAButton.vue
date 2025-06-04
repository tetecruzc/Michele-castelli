<template>
    <a :href="link" target="_blank" class="cta-button">🌐 {{ label }}</a>
  </template>
  
  <script lang="ts">
  import Vue from 'vue';
import Component from 'vue-class-component';
  
  @Component({
    props: {
      label: String,
      link: String,
    },
  })
  export default class CTAButton extends Vue {
    label!: string;
    link!: string;
    name = 'CTAButton';
  }
  </script>
  
  <style scoped>
  .cta-button {
    padding: 0.75rem 2rem;
    border: 1px solid #ff4d4d;
    color: #ff4d4d;
    border-radius: 0.5rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #ff4d4d;
    color: white;
  }
  </style>
  