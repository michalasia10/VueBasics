<template>
    <div>
        <the-header></the-header>
        <badge-list></badge-list>
        <user-info
                :full-name="activeUser.name"
                :info-text="activeUser.description"
                :role="activeUser.role"
        ></user-info>
        <course-goals>
            <template #default="slotProps">
                <h2>{{slotProps.item}}</h2>
            </template>
        </course-goals>
    </div>
</template>

<script>
    import TheHeader from './components/TheHeader.vue'
    import UserInfo from "./components/UserInfo";
    import BadgeList from "./components/BadgeList"
    import CourseGoals from "./components/CourseGoals";

    export default {
        components: {
            TheHeader,
            UserInfo,
            BadgeList,
            CourseGoals
        },
        data() {
            return {
                activeUser: {
                    name: 'Maximilian Schwarzmüller',
                    description: 'Site owner and admin',
                    role: 'admin',
                },
            };
        },
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