import './App.css'
import ForgotPassForm from './components/auth/ForgotPassForm';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ContactList from './components/contacts/ContactList';
import CreateContact from './components/contacts/CreateContact';
import Dashboard from './components/template/Dashboard';
import AdminPage from './pages/AdminPage';
import AuthPage from './pages/AuthPage';
import ContactPage from './pages/ContactPage';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Loading from './components/template/Loading';
import { ToastContainer } from "react-toastify";
import StoriesList from './components/stories/StoriesList';
import CreateStories from './components/stories/CreateStories';
import { useSelector } from 'react-redux';

function App() {
  const loading = useSelector(state => state.loading);
  return (
    <>
      {loading ? <Loading /> : ""}
      <ToastContainer />
      <Routes>
        <Route path='/' element={<ContactPage />}>
          <Route path='list' element={<ContactList />} />
          <Route path='create' element={<CreateContact />} />
        </Route>
        <Route path='/admin' element={<AdminPage />}>
            <Route index element={<Dashboard />} />
            <Route path='contact/list' element={<ContactList />} />
            <Route path='contact/create' element={<CreateContact />} />
            <Route path='stories/list' element={<StoriesList />} />
            <Route path='stories/create' element={<CreateStories />} />
        </Route>
        <Route path='/auth'   element={<AuthPage />} >
          <Route path='login' element={<LoginForm />} />
          <Route path='register' element={<RegisterForm />} />
          <Route path='forgot-password' element={<ForgotPassForm />} />
        </Route>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
