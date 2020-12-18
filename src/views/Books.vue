<template>
  <div class="">
    <BannerTitled  :title="getTitleByFilterName()" subtitle="fromMichele"/>
     <template>
        <v-tabs
          v-model="tabs"
          centered
          show-arrows
        >
          <v-tab
            v-for="(n,index) in booksCategories"
            :key="index"
          >
            {{ $t(n.name) }}
          </v-tab>
        </v-tabs>
      </template>
            <v-tabs-items v-model="tabs" style="margin:0 5% !important;">
              <v-tab-item v-for="(j,ind) in booksCategories" :key="ind">
                      <div class="flex wrap x-center pb-medium pt-medium">
                          <BookCard v-for="(item, index) in filterBooksByCategories" :key="index" :item="item" />
                          <h3 class="color-primary" v-if="filterBooksByCategories.length == 0">
                            {{$t('emptyResults')}}
                          </h3>
                      </div>
              </v-tab-item>
            </v-tabs-items> 
  </div>
</template>


<script lang="ts">
import {Component,Watch} from 'vue-property-decorator';
import Vue from "vue";
import SvgIcon from "@/components/general/SvgIcon.vue";
import BookCard from "@/components/cards/BookCard.vue";
import { books,booksCategories } from "@/collections/books";
import {BookFilters} from "@/collections/filters";
import BannerTitled from '@/components/general/BannerTitled.vue';
@Component({
  components: {
    SvgIcon,
    BookCard,
    BannerTitled
  },
})
export default class Books extends Vue {
  books: Record<any, any> = [];
  filter: string = "";
  route = this.$route
  booksCategories : Record<any,any> = []
  currentTab : any = {}
  tabs=0;
  created() { 
    this.filterBooks()
    this.booksCategories = booksCategories
    this.currentTab = this.booksCategories[this.tabs].name
  }
  @Watch('$route')
    watchRoute(){
       this.filterBooks();
    }
  @Watch('tabs')
    watchTab(){
        this.currentTab = this.booksCategories[this.tabs].name
    }
    get filterBooksByCategories() : any {
        if (this.currentTab == 'all'){
          return this.books
        }
        else {
        return this.books.filter((el: { categories: string|any[]; }) => el.categories.includes(this.currentTab))}
    }


    getTitleByFilterName() : string {
        for (var i=0;i<Object.values(BookFilters).length;i++){
            if (Object.values(BookFilters)[i] === this.filter){
                return 'filteredBooks.'+ this.filter
            }
        }
        return ''
    }
    
    filterBooks(){
            this.filter = this.$route.params.filter;
            if (this.filter === 'all'){
                this.books = books;             
            }
            else{
                this.books = books.filter(
                    (el: { filter: string[] }) => el.filter.includes(this.filter)
                );
            }
            if (this.books.length === 0){
                this.$router.push({
                    name: 'Home'
                }).catch(()=>{});
            }  
    }
}
</script>

