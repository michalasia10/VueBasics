const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName : '',
        };
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        minus(num) {
            this.counter = this.counter - num;
        },
        setName(event) {
            this.name = event.target.value
        },
        submitForm(){
            alert('submited')
        },
        confirmedInput(){
            this.confirmedName = this.name
        },
        resetInput(){
            this.name = ''
        }
    }
})

app.mount('#events')