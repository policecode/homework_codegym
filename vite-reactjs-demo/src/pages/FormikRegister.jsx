import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup'; //Validation

const schema = yup.object({
    email: yup.string().required('Bắt buộc phải nhập').email('Không đúng định dạng email'),
    pass: yup.string().required('Bắt buộc phải nhập').min(8, 'phải có tối thiểu 8 ký tự'),
    pass_confirm: yup.string().required('Bắt buộc phải nhập').oneOf([ yup.ref('pass')], 'Mật khẩu không khớp')
});
export default function FormikRegister() {
    /**
     * - values: Dữ liệu của form
     * - errors: Các trường lỗi của form
     * - handleSubmit: Hàm xử lý submit
     * - handleChange: Xử lý việc thay đổi dữ liệu
     * - resetForm: xóa sạch dữ liệu trong form
     * - touched: Đã thực hiện Hành động chạm chưa
     * - handleBlur: Xử lý hành động nháy vào ô input
     */
    const { values, errors, touched, handleSubmit, handleChange, resetForm, handleBlur } = useFormik({
        initialValues: {
            email: '',
            pass: '',
            pass_confirm: ''
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
                    <span>{touched?.email && errors?.email ? errors?.email : ''}</span>
                </div>
                <div className="form-group mb-4">
                    <label className="form-label">Password</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.pass}
                        type="password" name='pass' className='form-control' />
                    {touched?.pass && errors?.pass ? errors?.pass : ''}
                </div>
                <div className="form-group mb-4">
                    <label className="form-label">Password Confirm</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.pass_confirm}
                        type="password" name='pass_confirm' className='form-control' />
                    {touched?.pass_confirm && errors?.pass_confirm ? errors?.pass_confirm : ''}
                </div>
                <button type='submit' className='btn btn-primary mt-2'>Login</button>
                <button onClick={resetForm} type='reset' className='btn btn-warning mt-2'>Cancel</button>

            </form>
        </div>
    )
}

