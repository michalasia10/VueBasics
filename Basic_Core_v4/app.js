const app = Vue.createApp({
    data(){
        return {
            output:'OUTPUT',
            outputSecond:'OUTPUT',
        };
    },
    methods:{
        buttonAlert(){
            alert('Message from button')
        },
        refreshValue(event){
            return event.target.value
        },
        refreshOutput(event){
            this.output = this.refreshValue(event);
        },
        refreshSecondOutput(event){
            this.outputSecond = this.refreshValue(event);
        }
    }
})

app.mount('#assignment')
