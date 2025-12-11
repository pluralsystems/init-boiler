import { ViewLoader } from '@components'
import { routes } from '@routes/public'

export default function DefaultLayout() {
  return <ViewLoader routes={routes} />
}
