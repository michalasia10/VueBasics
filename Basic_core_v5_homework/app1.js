const app1 = Vue.createApp({
    data() {
        return {
            result: 0
        };
    },
    computed: {
        result() {
            if (this.result < 37) {
                return 'Not there yet!';
            } else if (this.result === 37) {
                return this.result;
            } else {
                return 'Too much!';
            }
        }
    },
    watch: {
        result() {
            console.log('Watcher executing...');
            const that = this;
            setTimeout(function () {
                that.result = 0;
            }, 5000);
        }
    },
    methods: {
        addNumber(num) {
            this.result = this.result + num;
        }
    }
});

app1.mount('#assignment');