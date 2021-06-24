import { lazy } from "react";
const Home = lazy(() => import(/* webpackChunkName: "home" */"../pages/Home"))
const HomeLayout = lazy(() => import(/* webpackChunkName: "HomeLayout" */"../layout/index"))
const User = lazy(() => import(/* webpackChunkName: "user" */"../pages/User"))
const Test1 = lazy(() => import(/* webpackChunkName: "Test1" */"../pages/Test1"))
const Test2 = lazy(() => import(/* webpackChunkName: "Test2" */"../pages/Test2"))

export const rootRouter = [
    {
        component: HomeLayout,
        path: '/home'
    },
    {
        component: User,
        path: '/user'
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