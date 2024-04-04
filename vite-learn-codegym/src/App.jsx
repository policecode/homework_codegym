import { useState } from 'react'
import Alert from './component/Alert'
import StudentInfo from './component/StudentInfo'
import ExpandCollapse from './component/ExpandCollapse'
import Calculate from './component/Calculate'
import Authentication from './pages/Authentication'
import MyClock from './component/MyClock'
import Car from './pages/Car'
import Timer from './pages/Timer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." /> */}
     {/* <StudentInfo /> */}
     {/* <ExpandCollapse /> */}
     {/* <Calculate /> */}
     {/* <Authentication /> */}
     {/* <MyClock /> */}
     {/* <Car /> */}
     <Timer />
    </>
  )
}

export default App
