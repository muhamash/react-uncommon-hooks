import './App.css'
// import { data } from './assets//components/transition/fakeUser'
import GithubInfo from './assets/components/debug/Github'
import FormId from './assets/components/FormId/FormId'
import ParentChild from './assets/components/Imperative/ParentChild'
import Boomer from './assets/components/insertion/Boomer'
import LayoutTest from './assets/components/LayoutEffect/LayoutEffect'
// console.log(data)

function App() {

  return (
    <div>
      {/* hello */}
      <GithubInfo />
      <div>
        <div>
        <LayoutTest/>
      </div>
        <FormId />
        <Boomer />
        <ParentChild/>
      </div>
      {/* <div>
        <FindUser users={data}/>
      </div> */}
      
    </div>
  )
}

export default App
