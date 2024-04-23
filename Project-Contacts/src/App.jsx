import './App.css'
import ContactList from './components/contacts/ContactList'
import CreateContact from './components/contacts/CreateContact'
import LayoutOne from './components/template/LayoutOne'
import LayoutTwo from './components/template/LayoutTwo'
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
            <Route path='contact/list' element={<ContactList />} />
            <Route path='contact/create' element={<CreateContact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
