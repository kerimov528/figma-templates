import { lazy } from "react";

export const AboutRoute: IRoute = 
    {
        key: 'AboutRoute',
        path: '/about',
        component: lazy(()=> import('@src/pages/About/Page'))
    }
