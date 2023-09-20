const { createApp } = Vue

// Crea una nuova app Vue
createApp({
    // Definisce le proprietà dei dati per l'app
    data() {

        return {
           
            generatesEmail: [], // Array per memorizzerà le email generate
            // success: false, // Segnalatore che indicherà quando tutte le email sono state generate

        }
    },
    mounted(){
        
        for (let i = 0; i < 10; i++) { // Ciclo for per fare 10 richieste all'API

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail') // Richiesta GET all'API

                .then(response => {
                    this.generatesEmail.push(response.data.response); // Quando la richiesta ha successo, aggiungiamo l'email generata all'array generatesEmail

                    // if (this.generatesEmail.length === 10) { 
                    //     this.success = true; // Se le 10 email sono generate impostiamo success a true
                    // }
                });

        }

    }

}).mount('#app');