import { useState } from 'react';
import { Bs0CircleFill } from "react-icons/bs";
/**
 * Hook (Function) ~ ClassCoponent
 * useEffect ~ componentDidMount(), componentWillUnmount(), componentDidUpdate()
 * useState ~ this.state
 */

/**
 * hook useState
 * Quy tắc: Các hook luôn bắt đầu với từ khóa "use"
 * Cú pháp: [state, setState] = useState(initState)
 * Chức năng: Quản lý dữ liệu bên trong component
 * sử dụng useState => tạo ra 1 vùng nhớ bên trong component, có biến state
 * giá trị khởi tạo của biến state là initState
 * Mỗi khi thực thi hàm setState thì component sẽ đưuọc re-render
 */

function AppFunc(props) {
  // console.log('first');
  // const {type} = props;
  const [count, setCount] = useState(0);
  let increment = () => {
    // console.log('two');
    setCount(count + 1)
  }
  return (
    <>
      <div className="container">
        <h1>{count} <Bs0CircleFill className='text-danger' /></h1>
        <button onClick={increment} className='btn btn-success'>Increment </button>
      </div>
    </>
  )
}
<style>

</style>
export default AppFunc
