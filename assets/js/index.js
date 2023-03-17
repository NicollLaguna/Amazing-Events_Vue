const {createApp} = Vue
const app = createApp({
    data(){
        return{
            eventos : [],
            fecha:  undefined,
            categorias :[],
            checked : [],
            eventosFiltrados : [],
            valueBusqueda: '',
        }
    },
    created(){
        fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(Response => Response.json())
        .then(({ events , currentDate })  => {
            this.eventos = events
            this.eventosFiltrados = events
            this.fecha = currentDate
            this.categorias = [...new Set(events.map(event => event.category))]
        })
    },
    methods : {
        filtro(){
        if(this.eventos.length == 0){
            this.eventosFiltrados = [{},{}]
        }
        else{
            let filtradoBusqueda = this.eventos.filter(evento => evento.name.toLowerCase().includes (this.valueBusqueda.toLowerCase()))
           let filtrarChecks = filtradoBusqueda.filter(evento => this.checked.includes(evento.category)|| this.checked.length == 0)
           this.eventosFiltrados = filtrarChecks
        }
           
        },},})
        
app.mount('#main')
