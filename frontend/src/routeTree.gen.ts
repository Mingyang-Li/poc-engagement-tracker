/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as EngagementIndexImport } from './routes/engagement/index'
import { Route as EngagementCreateImport } from './routes/engagement/create'
import { Route as EngagementBudgetReportImport } from './routes/engagement/budget-report'
import { Route as EngagementEditIdImport } from './routes/engagement/edit.$id'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const EngagementIndexRoute = EngagementIndexImport.update({
  path: '/engagement/',
  getParentRoute: () => rootRoute,
} as any)

const EngagementCreateRoute = EngagementCreateImport.update({
  path: '/engagement/create',
  getParentRoute: () => rootRoute,
} as any)

const EngagementBudgetReportRoute = EngagementBudgetReportImport.update({
  path: '/engagement/budget-report',
  getParentRoute: () => rootRoute,
} as any)

const EngagementEditIdRoute = EngagementEditIdImport.update({
  path: '/engagement/edit/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/engagement/budget-report': {
      id: '/engagement/budget-report'
      path: '/engagement/budget-report'
      fullPath: '/engagement/budget-report'
      preLoaderRoute: typeof EngagementBudgetReportImport
      parentRoute: typeof rootRoute
    }
    '/engagement/create': {
      id: '/engagement/create'
      path: '/engagement/create'
      fullPath: '/engagement/create'
      preLoaderRoute: typeof EngagementCreateImport
      parentRoute: typeof rootRoute
    }
    '/engagement/': {
      id: '/engagement/'
      path: '/engagement'
      fullPath: '/engagement'
      preLoaderRoute: typeof EngagementIndexImport
      parentRoute: typeof rootRoute
    }
    '/engagement/edit/$id': {
      id: '/engagement/edit/$id'
      path: '/engagement/edit/$id'
      fullPath: '/engagement/edit/$id'
      preLoaderRoute: typeof EngagementEditIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  EngagementBudgetReportRoute,
  EngagementCreateRoute,
  EngagementIndexRoute,
  EngagementEditIdRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/engagement/budget-report",
        "/engagement/create",
        "/engagement/",
        "/engagement/edit/$id"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/engagement/budget-report": {
      "filePath": "engagement/budget-report.tsx"
    },
    "/engagement/create": {
      "filePath": "engagement/create.tsx"
    },
    "/engagement/": {
      "filePath": "engagement/index.tsx"
    },
    "/engagement/edit/$id": {
      "filePath": "engagement/edit.$id.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
