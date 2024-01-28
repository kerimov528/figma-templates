import { lazy } from "react";

export const LandingRoute: IRoute[] = [
    {
        key: 'LandingRoute',
        path: '/',
        component: lazy(()=> import('@src/pages/Landing/Page'))
    }
]