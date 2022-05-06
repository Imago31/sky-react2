import './App.css'
import StudCard from './StudCard'
// import StudCardClass from './StudCardClass'
import CurCount from './CurCount'
import SetTimer from './SetTimer'

function App() {
  return (
    <div className="App">
      <StudCard text="Студент" name="Олег" />
      <StudCard text="Препод" name="Евгений" />
      <StudCard text="Студент" name="Кирилл" />
      <CurCount/>
      <SetTimer/>
    </div>
  )
}



export default App
