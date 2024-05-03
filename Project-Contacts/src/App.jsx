import './App.css'
import ForgotPassForm from './components/auth/ForgotPassForm'
import LoginForm from './components/auth/LoginForm'
import RegisterForm from './components/auth/RegisterForm'
import ContactList from './components/contacts/ContactList'
import CreateContact from './components/contacts/CreateContact'
import Dashboard from './components/template/Dashboard'
import AdminPage from './pages/AdminPage'
import AuthPage from './pages/AuthPage'
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
        <Route path='/auth' element={<AuthPage />} >
          <Route path='login' element={<LoginForm />} />
          <Route path='register' element={<RegisterForm />} />
          <Route path='forgot-password' element={<ForgotPassForm />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
