import { useState } from 'react'
import Alert from './component/Alert'
import StudentInfo from './component/StudentInfo'
import ExpandCollapse from './component/ExpandCollapse'
import Calculate from './component/Calculate'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." /> */}
     {/* <StudentInfo /> */}
     {/* <ExpandCollapse /> */}
     <Calculate />
    </>
  )
}

export default App
