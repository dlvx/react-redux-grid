import React from 'react';
import {GridComponent, GridDetailComponent} from './grid'

const config = {
    routes: [
        {
            path: '/',
            exact: true,
            component: (props) => <div>Home</div>
        },
        {
            path: '/grid',
            subRoutes: [
                {
                    path: '/grid',
                    exact: true,
                    component: GridComponent
                },
                {
                    path: '/grid/:id',
                    component: GridDetailComponent
                }
            ]
        }
    ]
}

export default config