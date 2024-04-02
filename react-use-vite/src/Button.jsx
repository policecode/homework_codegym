import './App.css'

function Button(props) {
// console.log(props);
  return (
    <>
      <button className={props?.type}>Button</button>
    </>
  )
}

export default Button
