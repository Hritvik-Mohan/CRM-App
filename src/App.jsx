import './App.css'
import Customer from './pages/Customer/Customer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomerForm from './components/Customer/CustomerForm/CustomerForm'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <div className="App">
      <ChakraProvider>
      <BrowserRouter>
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
