const app = Vue.createApp({
    data(){
        return{
            name:'Michał',
            age:23
        };
    },
    methods:{
        favoriteNumber(){
            return Math.random()
        }
    }

});

app.mount('#assignment')