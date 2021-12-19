const app = Vue.createApp({
    data(){
        return {
            enternedGoalValue : '',
            goals: []
        }
    },
    methods : {
        addGoal() {
            this.goals.push(this.enternedGoalValue)
        },
        removeGoal(idx){
            this.goals.splice(idx,1)
        }
    }
})
app.mount('#user-goals')