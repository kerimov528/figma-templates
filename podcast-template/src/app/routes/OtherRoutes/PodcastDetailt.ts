import { lazy } from "react";

export const PodcastDetail: IRoute = 
    {
        key: 'PodcastDetail',
        path: '/podcastDetail',
        component: lazy(()=> import('@src/pages/PodcastDetail/Page'))
    }
