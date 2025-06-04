<template>
  <div class="diaspora-promotion">
    <span class="new-publication">  {{$t('diaspora.recentPost') }}</span>
    <h1 class="main-title">{{$t('diaspora.title')}}</h1>
    <h2 class="subtitle">{{$t('diaspora.subtitle')}}</h2>
    <p class="description">{{$t('diaspora.description')}}</p>

    <div class="books-container">
      <div class="book-version">
        <img :src="diasporaEs" alt="Diáspora Versión en Español Cover" class="book-cover">
        <div class="book-content">
          <h3 class="version-title">{{$t('diaspora.spanishVersion')}}</h3>
          <p class="book-subtitle">{{$t('diaspora.immigrationHistory')}}</p>
          <p class="rating">⭐⭐⭐⭐⭐</p>
          <p class="version-description">{{$t('diaspora.summary')}}</p>
          <a href="https://a.co/d/isB6lUk"  target="_blank" class="amazon-button">{{$t('diaspora.buyOnAmazon')}}</a>
          <p class="availability">{{$t('diaspora.availableOn')}}</p>
        </div>
      </div>
      <div class="book-version">
        <img :src="diasporaPt" alt="Diáspora Versão em Português Cover" class="book-cover">
        <div class="book-content">
          <h3 class="version-title">Versão em Português</h3>
          <p class="book-subtitle">Racconti di emigrazione</p>
          <p class="rating">⭐⭐⭐⭐⭐</p>
          <p class="version-description">A história de uma família camponesa italiana que emigra para a Venezuela nos anos 50, estabelecendo uma próspera fazenda agrícola enquanto seu filho sonha com a presidência.</p>
          <a href="https://a.co/d/0Ur4O6B" target="_blank" class="amazon-button">Comprar na Amazon</a>
          <p class="availability">Disponível em formato digital e físico</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
  }
})
export default class DiasporaPromotion extends Vue {
  name = 'DiasporaPromotion';
  diasporaEs = require('@/assets/images/diaspora-es.png');
  diasporaPt = require('@/assets/images/diaspora-pt.png');
}
</script>

<style scoped>
.diaspora-promotion {
  text-align: center;
  padding: 100px 40px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #fafafa;
}

.new-publication {
  background-color: #a52a2a;
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9em;
  margin-bottom: 15px;
  display: inline-block;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.main-title {
  font-size: 3.5em;
  /* margin-bottom: 10px; */
  color: #2c3e50;
  font-weight: 700;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1.5em;
  color: #34495e;
  margin-bottom: 25px;
  font-weight: 300;
  text-align: center;
  justify-content: center;
  letter-spacing: 2px;
}

.description {
  margin-bottom: 40px;
  color: #555;
  font-size: 1.1em;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.3;
}

.books-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 40px;
  flex-wrap: wrap;
  padding: 20px;
  max-width: 1600px;
  margin: 0 auto;
}

.book-version {
  border: none;
  border-radius: 15px;
  padding: 20px;
  width: calc(50% - 20px);
  max-width: 600px;
  text-align: left;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  gap: 30px;
}

.book-version:hover {
  transform: translateY(-5px);
}

.book-cover {
  height: 300px;
  width: auto;
  margin-bottom: 0;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.book-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.version-title {
  font-size: 1.4em;
  /* margin-bottom: 2px; */
  color: #2c3e50;
  font-weight: 600;
}

.book-subtitle {
  font-size: 0.8em;
  color: #7f8c8d;
  margin-bottom: 8px;
  font-weight: 500;
}

.rating {
  color: #f1c40f;
  margin-bottom: 8px;
  font-size: 1.2em;
}

.version-description {
  font-size: 0.9em;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.6;
  text-align: justify;
}

.amazon-button {
  display: inline-block;
  background-color: #a52a2a;
  color: white;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 30px;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9em;
  align-self: flex-start;
}

.amazon-button:hover {
  background-color: #c0392b;
  transform: scale(1.05);
}

.availability {
  font-size: 0.9em;
  color: #4d4f4f;
  font-style: italic;
}

@media (max-width: 1200px) {
  .book-version {
    width: 100%;
    max-width: 800px;
  }
  .description
{
    max-width: fit-content;
}
}

@media (max-width: 768px) {
    .diaspora-promotion {
        padding: 80px 10px;
    }


  .book-version {
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
  }

  .book-cover {
    /* width: auto; */
    height: 400px;
    margin-bottom: 20px;
  }

  .book-content {
    align-items: center;
  }

  .version-description {
    text-align: center;
  }

  .amazon-button {
    align-self: center;
  }
}
</style>
