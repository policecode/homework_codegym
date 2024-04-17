import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

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
export default function Student() {
    let [student, setStudent] = useState({});
    let param = useParams();
    let {id} = param;
    useEffect(() => {
        let getStuden = async () => {
            let response = await fetch(
                `https://jsonserver-vercel-api.vercel.app/student/${id}`
              );
              let result = await response.json();
              setStudent(result);
        }
        getStuden();
    }, [id]);
    if (student.id) {
        return (
            <div className="container">
                <h1>Id: {student.id}</h1>
                <img src={student.avatarUrl} alt="" />
                <h2>Name: {student.fullname}</h2>
                <h2>Email: {student.email}</h2>
            </div>
        )
    } else {
        return;
    }
}