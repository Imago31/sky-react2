/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import './App.css'
import StudCard from './StudCard'
import CurCount from './CurCount'
import AppLesson3 from './AppLesson3'

function App() {
  return (
    <div className="App">
      <StudCard text="Студент" name="Олег" />
      <StudCard text="Препод" name="Евгений" />
      <StudCard text="Студент" name="Кирилл" />
      <CurCount/>
      <AppLesson3/>
    </div>
  )
}



export default App
