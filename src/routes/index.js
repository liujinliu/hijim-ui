import DashBoardView from '@/views/dashboard'
import WorkAppView from '@/views/work/apps'
import WorkSuitsView from '@/views/work/suits'

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/dashboard',
        component: () => import("@/views/layout"),
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: DashBoardView
            }
        ]
    },
    {
        path: '/work',
        name: 'work',
        redirect: '/work/apps',
        component: () => import("@/views/layout"),
        children: [
            {
                path: 'apps',
                name: 'WorkApps',
                component: WorkAppView
            },
            {
                path: 'suits',
                name: 'WorkSuits',
                component: WorkSuitsView
            }
        ]
    }
]

export default routes