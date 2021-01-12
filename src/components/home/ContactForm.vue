<template>
      <form  role="form" method="POST" class="form-book">
          <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeInRight">
          <div v-if="!success" class="content">
                <div class="title-primary mb-small">{{$t('messageMe')}}</div>
               <!-- <div class="subtitle mb-small">
                    <div class="line"></div>
                        <SvgIcon :name="'pen'" styles='icon  icon-small icon-secondary' :externalIcon="'pen.svg'"/>
                    <div class="line"></div>
                </div> -->
            <v-text-field
            :label="$t('contactForm.name')"
            filled
            prepend-inner-icon="mdi-account"
            v-model="name"
          ></v-text-field>
          <v-text-field
            label="Email"
            filled
            type="email"
            prepend-inner-icon="mdi-email"
            v-model="email"
          ></v-text-field>
            <v-textarea
            filled
            name="input-7-4"
            :label="$t('contactForm.message')"
            prepend-inner-icon="mdi-android-messages"
            v-model="message"
            rows="2"
            row-height="20"
            ></v-textarea>
             <v-alert
              dismissible
              type="error"
              transition="scale-transition"
              color="primary"
              v-model="error"
            >{{errorMessage}}</v-alert>
              <a v-if="!verifySpinner" class="button button__secondary" href="#" @click.prevent="sendEmail"> 
                {{$t('contactForm.send') }}
              </a>   
              <div v-else class="loading-spinner"><div></div><div></div><div></div><div></div></div> 
        </div>      
                <div v-else class="content content-full">    
                    <p>{{$t('form.success')}}</p>
                    <SvgIcon  name="icon-checkmark" styles="icon-success" />              
                </div>  
        </transition>   
      </form>
    
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import SvgIcon from '@/components/general/SvgIcon.vue';
import axios from "axios";

@Component({
   components:{
       SvgIcon
   }
})
export default class Form extends Vue {
  public name = '';
  public message = '';
  public email ='';
  public endpoint: string = 'https://formspree.io/f/xwkwqqdg';
  success = false
  error = false
  visibility = true;
  errorMessage : any = ''
  loadingSpinner = false;
  
    get verifySpinner(): boolean{
        return this.loadingSpinner;
    }

    sendEmail() {    
     if (this.name == '' || this.message == '' || this.email == ''){
          this.error = true
          this.errorMessage =  this.$t('form.emptyField') 
      }
      else {
          this.loadingSpinner = true;
          axios.post(
          this.endpoint,
          {
            nombre: this.name,
            mensaje: this.message,
            email: this.email
          },
          //  eslint-disable-next-line no-unused-vars
        ).then((response) => {
          this.name =''
          this.message =''
          this.email=''
          this.success = true
         this.loadingSpinner = false;
        // this.$router.push({ path: '/success' });
        }).catch((error) => {       
          if (error.response) {
            // eslint-disable-next-line no-alert
            this.loadingSpinner = false;
           // window.alert(this.loadingSpinner);
            this.error=true
            if (error.response.data.errors[0].code === 'EMPTY'){
              this.errorMessage = this.$t('form.emptyField') 
            }
            else this.errorMessage =  this.$t('form.error') 
          }
        });
      }
      
    }
}
</script>

<style scoped>
.v-alert{
  width: 90% !important;
  font-size: 14px !important;
}
</style>