import { TaskProvider }  from './contexts/TaskContext'
import { Home } from './pages/home/home'

function App() {


  return (
    <TaskProvider>
      <>
        <Home />
      </>
    </TaskProvider>
  )
}

export default App
