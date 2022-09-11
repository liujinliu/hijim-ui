import DashBoardView from '@/views/dashboard'
import WorkUnitView from '@/views/work/units'
import WorkSuitsView from '@/views/work/suits'
import MarketView from '@/views/market'

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
        path: '/market',
        component: () => import("@/components/layout"),
        redirect: '/market/apps',
        children: [
            {
                path: 'apps',
                name: 'MarketApps',
                component: MarketView
            }
        ]
    }
]

export default routes