import { useState } from "react";
import Alert from "./component/Alert";
import StudentInfo from "./component/StudentInfo";
import ExpandCollapse from "./component/ExpandCollapse";
import Calculate from "./component/Calculate";
import Authentication from "./pages/Authentication";
import MyClock from "./component/MyClock";
import Car from "./pages/Car";
import Timer from "./pages/Timer";
import CustomCount from "./pages/CustomCount";
import FormContact from "./pages/FormContact";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="about" element={<h2>About</h2>} />
    </Routes>
  );
}

export default App;
