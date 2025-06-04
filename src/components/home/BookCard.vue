<template>
    <div class="book-card">
      <div class="image-wrapper">
        <img :src="img" :alt="lang" class="book-image" />
      </div>
      <div class="content">
        <h3 class="language-title">Versión en {{ lang }}</h3>
        <p class="theme-label">Historias de Inmigración</p>
        <div class="stars">
          <span v-for="i in 5" :key="i">★</span>
          <span class="quote">{{ quote }}</span>
        </div>
        <p class="description">{{ text }}</p>
        <a :href="url" target="_blank" class="buy-button">{{ button }}</a>
        <p class="availability">Disponible en formato digital y físico</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from 'vue';
import Component from 'vue-class-component';
  
  @Component({
    name: 'BookCard',
    props: {
      lang: {
        type: String,
        required: true
      },
      img: {
        type: String,
        required: true
      },
      quote: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      button: {
        type: String,
        required: true
      }
    }
  })
  export default class BookCard extends Vue {
    name = 'BookCard';
    lang!: string;
    img!: string;
    quote!: string;
    text!: string;
    url!: string;
    button!: string;
  }
  </script>
  
  <style scoped>
  .book-card {
    background: white;
    border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .book-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  }
  
  .image-wrapper {
    width: 100%;
    aspect-ratio: 3/4;
    overflow: hidden;
  }
  
  .book-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .book-card:hover .book-image {
    transform: scale(1.05);
  }
  
  .content {
    padding: 1.75rem;
  }
  
  .language-title {
    font-size: 1.5rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-weight: 400;
  }
  
  .theme-label {
    font-style: italic;
    color: #6c757d;
    margin-bottom: 0.75rem;
  }
  
  .stars {
    color: #ff4d4d;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    gap: 0.3rem;
  }
  
  .quote {
    font-size: 0.85rem;
    color: #6c757d;
    margin-left: 0.5rem;
  }
  
  .description {
    font-size: 0.95rem;
    color: #333;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }
  
  .buy-button {
    display: inline-block;
    background-color: #ff4d4d;
    color: white;
    text-align: center;
    padding: 0.9rem;
    width: 100%;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: background 0.3s ease;
  }
  
  .buy-button:hover {
    background-color: #e03e3e;
  }
  
  .availability {
    font-size: 0.8rem;
    color: #888;
    margin-top: 0.75rem;
    text-align: center;
  }
  </style>
  