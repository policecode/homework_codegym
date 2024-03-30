import { useState } from 'react'
import './App.css'
import Alert from './component/Alert'
import StudentInfo from './component/StudentInfo'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." /> */}
     <StudentInfo />
    </>
  )
}

export default App
