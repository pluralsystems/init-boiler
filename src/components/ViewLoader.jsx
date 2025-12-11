import { Spinner } from '@components'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Page404 = lazy(() => import('../views/Page404'))

export const ViewLoader = ({ routes }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {routes &&
          routes.map(({ path, Element, name, allowedUserRoles }, idx) => {
            if (allowedUserRoles) {
              // check user permissions
            }
            return (
              Element && (
                <Route
                  key={path + '-' + idx}
                  path={path.replace(/^\.+|\.+$/g, '')}
                  element={<Element title={name} />}
                />
              )
            )
          })}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  )
}
