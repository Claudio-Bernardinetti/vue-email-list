const { createApp } = Vue

// Crea una nuova app Vue
createApp({
    // Definisce le proprietà dei dati per l'app
    data() {

        return {
           
            generatesEmail: [],

        }
    },
    mounted(){
        
        for (let i = 0; i < 10; i++) {
            
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
               this.generatesEmail.push (response.data.response);
            })
            
        }


    }

}).mount('#app');