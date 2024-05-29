import './App.css'
import { data } from './assets//components/transition/fakeUser'
import GithubInfo from './assets/components/debug/Github'
import FormId from './assets/components/FormId/FormId'
import FindUser from './assets/components/transition/FindUser'
// console.log(data)

function App() {

  return (
    <div>
      {/* hello */}
      <GithubInfo />
      <div>
        <FormId/>
      </div>
      <div>
        <FindUser users={data}/>
      </div>
    </div>
  )
}

export default App
