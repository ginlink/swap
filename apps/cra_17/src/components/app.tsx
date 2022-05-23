import { Alert } from '@ginlink/uilib'
import { useTest } from '@/hooks/test'

export const App = () => {
  useTest()

  return (
    <div>
      <Alert title="Alert" />
      123
    </div>
  )
}
