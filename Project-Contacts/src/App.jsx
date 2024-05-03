import './App.css'
import ContactList from './components/contacts/ContactList'
import CreateContact from './components/contacts/CreateContact'
import Dashboard from './components/template/Dashboard'
import AdminPage from './pages/AdminPage'
import ContactPage from './pages/ContactPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ContactPage />}>
          <Route path='list' element={<ContactList />} />
          <Route path='create' element={<CreateContact />} />
        </Route>
        <Route path='/admin' element={<AdminPage />}>
            <Route index element={<Dashboard />} />
            <Route path='contact/list' element={<ContactList />} />
            <Route path='contact/create' element={<CreateContact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
