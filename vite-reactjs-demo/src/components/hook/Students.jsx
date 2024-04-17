import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

// const students = [
//     {
//         id: 1,
//         name: 'Nguyễn Hoàng Đạt',
//         gender: 'male'
//     },
//     {
//         id: 2,
//         name: 'Nguyễn Mạnh Toàn',
//         gender: 'male'
//     },
//     {
//         id: 3,
//         name: 'Trần Thị Trúc',
//         gender: 'female'
//     },
//     {
//         id: 4,
//         name: 'Vũ Chiến Thắng',
//         gender: 'male'
//     },
//     {
//         id: 5,
//         name: 'Vũ Thị Biển',
//         gender: 'female'
//     }
// ]
export default function Students() {
    let [students, setStudents] = useState([]);
    useEffect(() => {
        let getStudens = async () => {
            let response = await fetch(
                `https://jsonserver-vercel-api.vercel.app/student`
              );
              let result = await response.json();
              setStudents(result);
        }
        getStudens();
    }, []);
    return (
        <div className="container">
             <Outlet />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <th scope="row">{student.id}</th>
                            <td>{student.fullname}</td>
                            <td>{student.email}</td>
                            <td>
                                <Link to={`/students/${student.id}`} >View</Link>
                            </td>
                        </tr>

                    ))}
                 
                </tbody>
            </table>
           
        </div>
    )
}