<template>
    <div>
    <div class="title-container" v-if="item.primary">
                  <h1>Michele Castelli</h1> 
                    <div class="subtitle">
                        <div class="line"></div>
                        <div class="text">Venezuela</div>
                        <div class="line"></div>
                    </div>
                    <a href="#section-contact" class="button button__primary mt-small">{{$t('contactMe')}}</a>
                </div>
    <div class="quote" v-else>
        <p>Entre las montañas de los Apeninos, más al sur de la Maiella, allí donde las alturas puntiagudas ceden el paso a colinas boscosas que alternan con fértiles valles sembrados de trigo y girasoles surge una aldea de nombre Santa Croce...</p>
        <div class="subtitle">
            <div class="line"></div>
            <div class="text">Cuentos de mi vida - 2002</div>
            <div class="line"></div>
        </div>
    </div>
    </div>
</template>

<script lang="ts">
import {Component,Prop} from 'vue-property-decorator';
import Vue from 'vue';

@Component({
   components:{
    
   }
})
export default class PrimaryContent extends Vue {
    @Prop() item!: string;
}
</script>