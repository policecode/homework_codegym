import CreateProductPagev2 from './pages/CreateProductPagev2';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/hook/Navbar';
import NotFound from './pages/NotFound';
import Slug from './components/hook/Slug';
/**
 * <Route path="*" element={<NotFound />} /> : Trường hợp đường dẫn không tồn tại
 */
function App() {

  return (
    <div className='container' >
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-product" element={<CreateProductPagev2 />} />
        <Route path="/new/:slug" element={<Slug />} />
        <Route path="*" element={<NotFound />} /> 

      </Routes> */}
      <CreateProductPagev2 />
    </div>
  )
}
<style>

</style>
export default App
