import { FaRegBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <>
      <nav className='bg-success'>
        <div className='container d-flex align-items-center justify-content-between text-white py-2'>
            <Link to={'/admin'} className='btn btn-light text-center'>Admin</Link>
          <div className='d-flex align-items-center'>
            <FaRegBell className='me-2' />
            <h6 className='me-2'>Hoàng Đạt</h6>
            <img src="https://www.freevector.com/uploads/vector/preview/28523/Group-of-People.jpg" className='avatar-sm' width="40px" alt="" />
          </div>
        </div>
      </nav>
    </>
  )
}

