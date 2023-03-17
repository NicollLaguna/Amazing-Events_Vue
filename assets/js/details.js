const {createApp} = Vue
const app = createApp({
  data(){
    return {
        params: '',
        idEvento: '',
        id: '',
        change: '',
    };
},
created(){
    fetch('https://mindhub-xj03.onrender.com/api/amazing')
        .then(response => response.json())
        .then(events => {
            this.params = new URLSearchParams(location.search);
            this.id = this.params.get('id');
            this.idEvento = events.events.find(evento => evento._id == this.id);
            this.change = this.idEvento.estimate ? 'Estimate: '+this.idEvento.estimate : 'Assistance: '+this.idEvento.assistance;
        })
        .catch(error=> console.log(error))
      },
    })

app.mount('#main')
