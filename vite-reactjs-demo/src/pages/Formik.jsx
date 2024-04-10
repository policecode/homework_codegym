import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup'; //Validation

const schema= yup.object({
    email: yup.string().required('Bắt buộc phải nhập').email('Không đúng định dạng email'),
    name: yup.string().required('Bắt buộc phải nhập').min(5, 'tên phải có tối thiểu 5 ký tự'),
    birth: yup.date().required('Bắt buộc phải nhập')
});
export default function Formik() {
    /**
     * - values: Dữ liệu của form
     * - errors: Các trường lỗi của form
     * - handleSubmit: Hàm xử lý submit
     * - handleChange: Xử lý việc thay đổi dữ liệu
     * - resetForm: xóa sạch dữ liệu trong form
     * - touched: Đã thực hiện Hành động chạm chưa
     * - handleBlur: Xử lý hành động nháy vào ô input
     */
    const {values, errors, handleSubmit, handleChange, resetForm, handleBlur} = useFormik({
        initialValues: {
            email: '',
            name: '',
            birth: ''
        },
    
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <div className='container'>
            <form action="" onSubmit={handleSubmit}>
                <h5 className="text-success fw-bolder py-3">Create Staff</h5>
                <div className="form-group mb-4">
                    <label className="form-label">Email</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        type="email" name='email' className='form-control' />
                    <span>{errors?.email}</span>
                </div>
                <div className="form-group mb-4">
                    <label className="form-label">Name</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        type="text" name='name' className='form-control' />
                    <span>{errors?.name}</span>
                    
                </div>
                <div className="form-group mb-4">
                    <label className="form-label">Birthday</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.birth}
                        type="date" name='birth' className='form-control' />
                    <span>{errors?.birth}</span>
                    
                </div>
                <button type='submit' className='btn btn-primary mt-2'>Login</button>
                <button onClick={resetForm} type='reset' className='btn btn-warning mt-2'>Cancel</button>

            </form>
        </div>
    )
}

