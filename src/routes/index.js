import DashBoardView from '@/views/dashboard'
import WorkUnitView from '@/views/work/units'
import WorkSuitsView from '@/views/work/suits'
import AppListView from '@/views/app'

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/dashboard',
        component: () => import("@/components/layout"),
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
        component: () => import("@/components/layout"),
        children: [
            {
                path: 'units',
                name: 'WorkUnits',
                component: WorkUnitView
            },
            {
                path: 'suits',
                name: 'WorkSuits',
                component: WorkSuitsView
            }
        ]
    },
    {
        path: '/apps',
        component: () => import("@/components/layout"),
        redirect: '/apps/index',
        children: [
            {
                path: 'index',
                name: 'AppList',
                component: AppListView
            }
        ]
    }
]

export default routes