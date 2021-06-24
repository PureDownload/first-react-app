import { Suspense } from 'react';

import { HashRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { rootRouter } from './router.config'

const RouterFun = () => {
    return (
        <Router>
            {/* 使用lazy异步加载组件后，需要配合使用Suspense组件包裹。fallback可以为loading，为异步包裹的内容 */}
            <Suspense fallback={ <div></div> }>
                <NavLink to="/home">HOME</NavLink>
                <NavLink to="/user">User</NavLink>
                {/* 需要该组件路由才能显示 */}
                <Switch>
                    {
                        rootRouter.map((route,i) => 
                            <Route key={route.path || i} path={ route.path } component={ route.component }></Route>
                        )
                    }
                </Switch>
            </Suspense>
        </Router>
    )
}

export default RouterFun