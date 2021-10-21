import { lazy } from "react";
const HomeLayout = lazy(() => import(/* webpackChunkName: "HomeLayout" */"../layout/index"))
const Test1 = lazy(() => import(/* webpackChunkName: "Test1" */"../pages/Test1"))
const Test2 = lazy(() => import(/* webpackChunkName: "Test2" */"../pages/Test2"))
const SendVal = lazy(() => import(/* webpackChunkName: "SendVal" */"../pages/SendVal/index"))
const Model = lazy(() => import(/* webpackChunkName: "Model" */"../pages/model/index"))
const Slots = lazy(() => import(/* webpackChunkName: "Slots" */"../pages/slots/index"))
const Styls = lazy(() => import(/* webpackChunkName: "style" */"../pages/style/index"))
const Ref = lazy(() => import(/* webpackChunkName: "ref" */"../pages/ref/index"))
const Computed = lazy(() => import(/* webpackChunkName: "computed" */"../pages/computed/index"))
const Watch = lazy(() => import(/* webpackChunkName: "Watch" */"../pages/watch/index"))
const Store = lazy(() => import(/* webpackChunkName: "Store" */"../pages/store/index"))
const Context = lazy(() => import(/* webpackChunkName: "Store" */"../pages/context/index"))

export const rootRouter = [
    {
        component: HomeLayout,
        path: '/home',
        name: '布局'
    },
    {
        component: SendVal,
        path: '/sendVal',
        name: '父子组件传值'
    },
    {
        component: Model,
        path: '/model',
        name: '双向绑定'
    },
    {
        component: Slots,
        path: '/style',
        name: '样式污染'
    },
    {
        component: Styls,
        path: '/slots',
        name: 'slots'
    },
    {
        component: Ref,
        path: '/ref',
        name: 'ref'
    },
    {
        component: Computed,
        path: '/computed',
        name: '计算属性'
    },
    {
        component: Watch,
        path: '/watch',
        name: '监听'
    },
    {
        component: Store,
        path: '/store',
        name: '全局存储'
    },
    {
        component: Context,
        path: '/context',
        name: 'Context组件树存储'
    }
]

export const homeRouter = [
    {
        component: Test1,
        path: '/home/test1'
    },
    {
        component: Test2,
        path: '/home/test2'
    }
]