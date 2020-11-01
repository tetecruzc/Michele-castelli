import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { es } from '@/i18n/translations/es';
import { ita } from '@/i18n/translations/ita';
import { en } from '@/i18n/translations/en';

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages: {
        es: es, ita
    },
});
