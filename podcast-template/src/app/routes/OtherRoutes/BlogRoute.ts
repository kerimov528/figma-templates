import { lazy } from "react";

export const BlogRoute: IRoute =
{
    key: 'BlogRoute',
    path: '/blog',
    component: lazy(() => import('@src/pages/Blog/Page'))
}

export const SingleBlog: IRoute = {
    key: 'SingleBlog',
    path: '/singleBlog',
    component: lazy(()=> import('@src/pages/SingleBlog/Page'))
}