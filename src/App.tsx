
import './App.css'
import FormsVal from './components/Forms 14-04-26/FormsVal'
// import List from './components/List 13-04-26/List'
import FetchApi from './components/Fetch-10-04-26/FetchApi'
// import EventHandlinds from './components/09-04-26/EventHandlinds'
// import Counter from './components/Counter'
// import Props from './components/Props'
// import UseStateEvent from './components/09-04-26/UseStateEvent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Counter /> */}
      {/* <Props name='Venkatasagar' /> */}
      {/* <UseStateEvent/> */}
      {/* <EventHandlinds /> */}
      {/* <FetchApi/> */}
      {/* <List /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormsVal />}></Route>
          <Route path='home' element={<FetchApi/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
