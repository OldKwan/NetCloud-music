import discover from "../pages/discover";

import { Redirect } from "react-router-dom";


import Discover from '@/pages/discover'
import Friend from '@/pages/friend'
import Mine from '@/pages/mine'

export default [
    {
        path: '/',
        exact: true,
        render: () => (<Redirect to="/discover" />),
    },
    {
        path: '/discover',
        component: Discover,
    },
    {
        path: '/friend',
        component: Friend,
    },
    {
        path: '/mine',
        component: Mine,
    }
]