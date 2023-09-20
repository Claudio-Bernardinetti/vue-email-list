const { createApp } = Vue

// Crea una nuova app Vue
createApp({
    // Definisce le proprietà dei dati per l'app
    data() {

        return {
           
            message: 'ciao'

        }
    },
    mounted(){
        console.log('ciao');
    }

}).mount('#app');