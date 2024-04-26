import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import avatarDefault from '../../assets/image/guest-user.webp';
const schema = yup.object({
  name: yup.string().required('Không được để trống').min(5, 'Không được ít hơn 5 ký tự'),
  birthday: yup.string(),
  company_name: yup.string().required('Không được để trống').min(5, 'Không được ít hơn 5 ký tự'),
  department: yup.string().required('Không được để trống'),
  job_title: '',
  phone: '',
  avatar: yup.string().url('Không đúng định dạng url'),

})
export default function CreateContact() {
  const { register, watch, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      birthday: 0,
      company_name: "",
      department: '',
      job_title: '',
      phone: '',
      avatar: '',
      note: ''
    }
  });
  const watchAvatar = watch('avatar', avatarDefault);
  const handleSubmitForm = (values) => {
    console.log(values);
    toast.success("Create success!", {
      position: "top-center",
    });
    reset();
  }
  return (

    <div className="row">
      <div className="p-5">
        <div className="text-center">
          <h1 className="h4 text-gray-900 mb-4">Create an Contact!</h1>
        </div>
        <form className="user">
          <div className="form-group row">
            <div className="col-6 mb-3">
              <label className="form-label">Full name</label>
              <input
                {...register('name')}
                className={`form-control ${errors.name?.message ? 'is-invalid' : ''}`}
                type="text" placeholder="Full name" />

              <div className="invalid-feedback">
                {errors.name?.message}
              </div>
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Birthday</label>
              <input
                {...register('birthday')}
                className={`form-control ${errors.birthday?.message ? 'is-invalid' : ''}`}
                type="date" />
              <div className="invalid-feedback">
                {errors.birthday?.message}
              </div>
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Company name</label>
              <input
                {...register('company_name')}
                className={`form-control ${errors.company_name?.message ? 'is-invalid' : ''}`}
                type="text" placeholder="Company name" />
              <div className="invalid-feedback">
                {errors.company_name?.message}
              </div>
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Department</label>
              <input
                {...register('department')}
                className={`form-control ${errors.department?.message ? 'is-invalid' : ''}`}
                type="text" placeholder="Department" />
              <div className="invalid-feedback">
                {errors.department?.message}
              </div>
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Job title</label>
              <input
                {...register('job_title')}
                className={`form-control ${errors.job_title?.message ? 'is-invalid' : ''}`}
                type="text" placeholder="Job title" />
              <div className="invalid-feedback">
                {errors.job_title?.message}
              </div>

            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Phone</label>
              <input
                {...register('phone')}
                className={`form-control ${errors.phone?.message ? 'is-invalid' : ''}`}
                type="tel" placeholder="Phone number" />
              <div className="invalid-feedback">
                {errors.phone?.message}
              </div>
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Avatar</label>
              <input
                {...register('avatar')}
                className={`form-control ${errors.avatar?.message ? 'is-invalid' : ''}`}
                type="url" placeholder="Link avatar" />
              <div className="invalid-feedback">
                {errors.avatar?.message}
              </div>
              <img src={watchAvatar} className='img-thumbnai border border-1 my-2' alt="Avatar" />
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Note</label>
              <textarea
                {...register('note')}
                className={`form-control ${errors.note?.message ? 'is-invalid' : ''}`}
                cols="30" rows="10" placeholder="Note" ></textarea>
              <div className="invalid-feedback">
                {errors.note?.message}
              </div>
            </div>
          </div>

          <a className="btn btn-primary">
            Create
          </a>
        </form>

      </div>
    </div>
  )
}