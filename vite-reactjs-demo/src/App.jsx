import CreateProductPagev2 from './pages/CreateProductPagev2';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/hook/Navbar';
import NotFound from './pages/NotFound';
import Slug from './components/hook/Slug';
import Department from './components/hook/Department';
import ItDepartment from './components/hook/ItDepartment';
import Students from './components/hook/Students';
import Student from './components/hook/Student';
/**
 * <Route path="*" element={<NotFound />} /> : Trường hợp đường dẫn không tồn tại
 */
function App() {

  return (
    <div className='container' >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-product" element={<CreateProductPagev2 />} />
        <Route path="/new/:slug" element={<Slug />} />
        <Route path="/department" element={<Department />} >
          <Route index element={<ItDepartment />} />
          <Route path='it' element={<ItDepartment />} />
          <Route path='hr' element={<h1>Hr Department</h1>}/>
          <Route path='sale' element={<h1>Sale Department</h1>} />
        </Route>

        <Route path="/students" element={<Students />} >
          <Route path=':id' element={<Student />} />
        </Route>
        <Route path="*" element={<NotFound />} /> 

      </Routes>
      {/* <CreateProductPagev2 /> */}
    </div>
  )
}
<style>

</style>
export default App
