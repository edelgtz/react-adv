import React from 'react';
import { lazy } from "react";
import { NoLazy } from '../01-Lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[];
}

// const LazyPage1 = lazy( () => import( /* webpackChunkName: "LazyPage1" */ '../01-Lazyload/pages/LazyPage1') )
// const LazyPage2 = lazy( () => import( /* webpackChunkName: "LazyPage2" */ '../01-Lazyload/pages/LazyPage2') )
// const LazyPage3 = lazy( () => import( /* webpackChunkName: "LazyPage3" */ '../01-Lazyload/pages/LazyPage3') )

export const routes: Route[] = [
    {
        path: '/lazyload',
        Component: lazy( () => import( /* webpackChunkName: "LazyLayout" */ '../01-Lazyload/layout/LazyLayout') ),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No lazy loading'
    }
]