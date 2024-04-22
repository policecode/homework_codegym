import { FaRegBell } from 'react-icons/fa'


export default function Header() {
  return (
    <>
      <nav className='bg-success'>
        <div className='container d-flex align-items-center justify-content-between text-white py-2'>
          <h5 className='flex-grow-1 text-center'>Contact</h5>
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

