const app = Vue.createApp({
    data() {
        return {
            result: 0,
        }
    },
    computed: {
        result() {
            if(this.result < 37){
                return 'Not there yet'
            } else if(this.result === 37){
                return this.result
            }else {
                'Too much'
            }
        }

    },
    watch: {
    result() {
      console.log('Watcher executing...');
      const that = this;
      setTimeout(function() {
        that.number = 0;
      }, 5000);
    }
  },
    methods: {
        addNum(number) {
            this.result += number
        },
    }
})

app.mount('#assignment');