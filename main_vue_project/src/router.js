import { createRouter, createWebHistory } from 'vue-router';
import CoachDeatil from './pages/coaches/CoachDetail'
import CoachList from './pages/coaches/CoachesList'
import CoachesRegistration from './pages/coaches/CoachesRegistration'
import ContactCoach from './pages/requests/ContactCoach'
import RequestReceived from './pages/requests/RequestReceived'
import NotFound from './NotFound'


const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/', redirect: '/coaches',
            },
            {
                path: '/coaches', component: CoachList,
            },
            {
                path: '/coaches/:id',
                component: CoachDeatil,
                props:true,
                children: [
                    {
                        path: '/contact', component: ContactCoach,
                    }
                ]
            },
            {
                path: '/register', component: CoachesRegistration,
            },
            {
                path: '/requests', component: RequestReceived,
            },
            {
                path: '/:notFound(.*)', component: NotFound,
            }

        ]
    })

export default router