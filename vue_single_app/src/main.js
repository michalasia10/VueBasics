import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList'
import UsersList from './components/users/UsersList'
import TeamMembers from './components/teams/TeamMembers'
import TeamsFooter from './components/teams/TeamsFooter'
import UsersFooter from './components/users/UsersFooter'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            redirect: '/teams'
        },
        {
            name: 'teams',
            path: '/teams',
            meta:{needAuth:true},
            components: {
                default : TeamsList,
                footer: TeamsFooter
            },
            childern: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                }
            ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter,
            },
            beforeEnter(to,from,next){
                next();
            }
        },
        {
            // path : '/teams/new'
        },
        // {
        //     path: '/:notFound(.*)',
        //     redirect: '/teams'
        // }


    ],
    linkActiveClass: 'active',
    scrollBehavior(to,from,saved){
        if (saved){
            return saved
        }
        return {
            left:0,
            top:0,
        }
    }
});

router.beforeEach(function (to,from,next){
    if(to.meta.needAuth){
        console.log('Need auth')
        next();
    }else{
        next()
    }
})
const app = createApp(App);
app.use(router);
app.mount('#app');
