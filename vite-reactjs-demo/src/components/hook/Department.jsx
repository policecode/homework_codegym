import { Link, Outlet } from "react-router-dom";

export default function Department() {
    return (
        <div className="container">
            <Link className="btn btn-link me-2" to={'/department/it'}>IT Department</Link>
            <Link className="btn btn-link me-2" to={'/department/hr'}>IT HR</Link>
            <Link className="btn btn-link me-2" to={'/department/sale'}>IT Sake</Link>
            <Outlet />
        </div>
    )
}