<template>
    <div>
        <the-header></the-header>
        <button @click="setSelectedCompontent('active-goals')">Active Goals</button>
        <button @click="setSelectedCompontent('manage-goals')">Manage Goals</button>
<!--        <active-goals v-if="selectedCompontent === 'active-goals'"/>-->
<!--        <manage-goals v-if="selectedCompontent === 'manage-goals'"/>-->
        <keep-alive>
            <component :is="selectedCompontent"></component>
        </keep-alive>
    </div>
</template>

<script>
    import TheHeader from './components/TheHeader.vue'
    // import UserInfo from "./components/UserInfo";
    // import BadgeList from "./components/BadgeList"
    // import CourseGoals from "./components/CourseGoals";
    import ManageGoals from "./components/ManageGoals";
    import ActiveGoals from "./components/ActiveGoals";
    export default {
        components: {
            TheHeader,
            // UserInfo,
            // BadgeList,
            // CourseGoals
            ActiveGoals,
            ManageGoals
        },
        data() {
            return {
                selectedCompontent : 'active-goals',
                activeUser: {
                    name: 'Maximilian Schwarzmüller',
                    description: 'Site owner and admin',
                    role: 'admin',
                },
            };
        },
        methods:{
            setSelectedCompontent(cmp){
                this.selectedCompontent = cmp
            }
        }
    };
</script>

<style>
    html {
        font-family: sans-serif;
    }

    body {
        margin: 0;
    }
</style>