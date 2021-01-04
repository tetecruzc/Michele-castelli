<template>
      <div class="">
    <BannerTitled  title="articles" subtitle="fromMichele"/>
    <template>
        <v-tabs
          v-model="tabs"
          centered
          show-arrows
        >
          <v-tab
            v-for="(n,index) in articlesCategories"
            :key="index"
          >
            {{ n.name }}
          </v-tab>
        </v-tabs>
      </template>
      <v-tabs-items v-model="tabs" style="margin:0 5% !important;">
      <v-tab-item v-for="(j,ind) in articlesCategories" :key="ind">
                <v-card
                max-width="700"
                class="mx-auto mtb-medium"
                v-for="(item,i) in getCollectionPaginated"
                    :key="i"
                >

                <v-list
                    subheader
                    two-line
                >
                    <v-list-item>
                    <v-list-item-avatar>
                        <v-icon
                        class="grey lighten-1"
                        dark
                        >
                        mdi-book-open
                        </v-icon>
                    </v-list-item-avatar> 
            
                    <v-list-item-content>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
            
                        <v-list-item-subtitle v-text="item.date"></v-list-item-subtitle>
                    </v-list-item-content>
            
                    <v-list-item-action>       
                        <div v-if="$vuetify.breakpoint.xs ? false : true" class="button button__secondary" @click.prevent="downloadPdf">{{$t('download')}}
                            <SvgIcon name="icon-download" styles="icon"/>
                        </div> 
                        <v-btn v-else icon >
                            <v-icon color="primary" large>mdi-download-circle</v-icon>
                        </v-btn>
                    </v-list-item-action>
                    
                    </v-list-item> 
                </v-list>
                <v-divider inset></v-divider>
                </v-card>
      </v-tab-item>
      <div class="text-center pa-10" >
            <v-pagination
            v-model="page"
            :length="getPaginationLength"
            circle
            color="primary"
            ></v-pagination>
        </div>
    </v-tabs-items>

    </div>
</template>


<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import SvgIcon from '@/components/general/SvgIcon.vue';
import {articles,articlesCategories,maxPerPage} from '@/collections/articles'
import { Watch } from 'vue-property-decorator';
import BannerTitled from '@/components/general/BannerTitled.vue';
@Component({
    components:{
        SvgIcon,
        BannerTitled
    }
})
export default class Articles extends Vue { 
    tabs= 0;
    page =1;
    articles : Record<any,any>= []
    articlesCategories : Record<any,any>=[]
    currentFirstItem = 0;
    created(){
        this.articles = articles
        this.articlesCategories = articlesCategories;
        
    }
    @Watch('tabs')
      changeTab(){
        this.page = 1
      }
    @Watch('page')
        changePage(){
            this.currentFirstItem = (this.page - 1) * maxPerPage;
        }

    get getCollectionPaginated() : any {      
        return  this.articlesCategories[this.tabs].collection.slice(this.currentFirstItem,this.currentFirstItem + maxPerPage)
    } 

    get getPaginationLength() : number{ 
       return Math.round(this.articlesCategories[this.tabs].collection.length / maxPerPage);
    }
    folders= [
      {
        subtitle: 'Jan 9, 2014',
        title: 'Photos',
      },
      {
        subtitle: 'Jan 17, 2014',
        title: 'Recipes',
      },
      {
        subtitle: 'Jan 28, 2014',
        title: 'Work',
      },
    ]
    isSmallDevice(){
        console.log(this.$vuetify.breakpoint)
        if (this.$vuetify.breakpoint.name == 'xs'){
            return true
        }
        else false
    }
}
</script>