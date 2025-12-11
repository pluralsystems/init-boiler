import { Spinner } from '@components'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AdminLayout = lazy(() => import('./views/layouts/AdminLayout'))
const NoLayout = lazy(() => import('./views/layouts/NoLayout'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="*" element={<NoLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
