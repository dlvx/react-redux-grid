import React from 'react';
import { GridComponent } from './grid'
import DetailComponent from './detail/detailComponent'

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
                    component: DetailComponent
                }
            ]
        }
    ]
}

export default config