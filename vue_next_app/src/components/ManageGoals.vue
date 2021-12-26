<template>
        <h2> Manage </h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Set Goal</button>
        <teleport to="body">
            <error-alert v-if="inputIsValid">
            <h2>Input is invalid!</h2>
            <p>Please enter at least a few characters...</p>
            <button @click="confirmError">Confirmed</button>
        </error-alert>
        </teleport>
</template>

<script>
    import ErrorAlert from "./ErrorAlert";
    export default {
        name: "ManageGoals",
        components: {ErrorAlert},
        data(){
            return{
                inputIsValid:false,
            }
        },
        methods:{
            setGoal(){
                const enternedValue = this.$refs.goal.value;
                if (enternedValue === ''){
                    this.inputIsValid = true
                }
            },
            confirmError(){
              this.inputIsValid = false
            }
        }
    }
</script>

<style scoped>

</style>