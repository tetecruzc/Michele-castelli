import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: '#a52a2a',
                secondary: '#ff9b24',
                purple: '#442464',
                purple2: '#e2c6e7',
                white: '#fff',
                orange: '#f58c51',
                black: '#333',
                purplelight: '#faf5ff',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            }
        }
    }
});
