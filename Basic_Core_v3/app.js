const app = Vue.createApp({
    data(){
        return{
            counter:0,
        };
    },
    methods:{
        add(num){
            this.counter = this.counter +num;
        },
        minus(num){
            this.counter = this.counter -num;
        }
    }
})

app.mount('#events')