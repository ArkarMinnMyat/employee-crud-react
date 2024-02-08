import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeesComponent from './components/ListEmployeesComponent'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path='/' element={<ListEmployeesComponent />} />
        <Route path='/employees' element={<ListEmployeesComponent />} />
        <Route path='/add-employee' element={<EmployeeComponent />} />
      </Routes>
      <FooterComponent></FooterComponent>
      </BrowserRouter>      
    </>
  )
}

export default App
