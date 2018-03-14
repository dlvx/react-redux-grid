import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'


const SubRouter = (props) => {
  const routes = props.routes
  return (
    <Switch>
        {
            routes.map((route, index) => {
                return (
                    <Route
                        key={`${props.root ? "root" : ""}${route.path}`}
                        exact={route.exact} 
                        path={route.path} 
                        render={
                            () => {
                                let Component = route.component
                                return (
                                    Component ? 
                                    <Component />
                                    : route.subRoutes ?
                                    <SubRouter routes={route.subRoutes}/>
                                    : null
                                )
                            }
                        }/>
                )
            })
        }
    </Switch>
  )
}

export default SubRouter