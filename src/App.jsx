import './App.css'
import Customer from './pages/Customer/Customer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomerForm from './components/Customer/CustomerForm/CustomerForm'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className="App">
      <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/' element={<Customer />} />
          <Route path='/form' element={<CustomerForm />} />
        </Routes>
      </BrowserRouter>
      </ChakraProvider>
    </div>
  )
}

export default App
