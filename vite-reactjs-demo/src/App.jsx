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
import { useReducer } from 'react';
/**
 * <Route path="*" element={<NotFound />} /> : Trường hợp đường dẫn không tồn tại
 */

/**
 * useReducer có thể thay thế cho useState và người lại
 * const [ state, dispatch] = useReducer(reducer, initState)
 * -> reducer: Hàm 
 *    => có input: state, action
 *    => output: Trả về new state, phụ thuộc vào action
 * -> initState: Dữ liệu khởi tạo, sẽ được gán lần đầu tiên cho state
 */

/**
 * action creator => Là 1 hàm -> tạo ra 1 action
 */
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'descrement':
      return state - 1;
    default:
      break;
  }
}
function App() {
  const [count, dispatch]  = useReducer(reducer, 0)
  return (
      <div className='container' >
        <Navbar />
        <div className="d-flex">
          <h4>Sử dụng useReducer: {count}</h4>
          <button onClick={() => dispatch('increment')} className='ms-4 btn btn-success'>Count</button>
          <button onClick={() => dispatch('descrement')} className='ms-4 btn btn-danger'>Uncount</button>
        </div>
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
