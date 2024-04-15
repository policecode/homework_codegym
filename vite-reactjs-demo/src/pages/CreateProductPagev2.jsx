import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import * as yup from 'yup';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
// Sử dụng React hook form
const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
const schema = yup.object({
    title: yup.string().required('Không được để trống').min(5, 'Không được ít hơn 5 ký tự'),
    price: yup.number().min(5, 'giá trị không được nhỏ hơn 5').typeError('price is numbber'),
    category: yup.string().required('Phải chọn một category'),
    image: yup.string().url('Không đúng định dạng url'),
    description: yup.string()
})
export default function CreateProductPagev2() {
    const { register, watch, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
        // defaultValues: {
        //     title: '',
        //     price: 0,
        //     category: "",
        //     description: '',
        //     image: ''
        // }
    });
    const watchImage = watch('image', '');
    const handleSubmitProduct = (values) => {
        console.log(values);
        toast.success("Create success!", {
            position: "top-center",
          });
          reset();
    }
    // console.log(image);
    return (
        <div className='container mt-4 bg-light bg-gradient'>
            <ToastContainer />
            <form action="" onSubmit={handleSubmit(handleSubmitProduct)}>
                <h3 className="text-success fw-bolder py-3 text-center">Create Product</h3>
                <div className="row">
                    <div className="col-6 form-group mb-4">
                        <label className="form-label fw-bold">Title</label>
                        <input
                            {...register('title')}
                            type="text" className={`form-control ${errors.title?.message?'is-invalid':'border border-success-subtle'}`} />
                        <div id="validationServer03Feedback" className="invalid-feedback">
                            {errors.title?.message}
                        </div>
                    </div>
                    <div className="col-6 form-group mb-4">
                        <label className="form-label fw-bold">Price</label>
                        <input
                            {...register('price')}
                            type="number" className={`form-control ${errors.price?.message?'is-invalid':'border border-success-subtle'}`} />
                        <div id="validationServer03Feedback" className="invalid-feedback">
                            {errors.price?.message}
                        </div>
                    </div>
                    <div className="col-6 form-group mb-4">
                        <label className="form-label fw-bold">Category</label>
                        <select 
                            defaultValue={"men's clothing"}
                            {...register('category')}
                            className={`form-select form-select ${errors.category?.message?'is-invalid':'border border-success-subtle'}`}
                            aria-label="Large select example">
                            {/* <option value="" defaultValue={""} disabled>Open this select category</option> */}
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <div id="validationServer03Feedback" className="invalid-feedback">
                            {errors.category?.message}
                        </div>
                    </div>
                   
                    <div className="col-6 form-group mb-4">
                       
                    </div>
                    <div className="col-6 form-group mb-4">
                        <label className="form-label fw-bold">Description</label>
                        <textarea 
                            {...register('description')}
                            className={`form-control ${errors.image?.message?'is-invalid':'border border-success-subtle'}`} cols="30" rows="10"></textarea>
                    </div>
                    <div className="col-6 form-group mb-4">
                        <label className="form-label fw-bold">Image</label>
                        {/* {watchImage} */}
                        <input
                            {...register('image')}
                            className={`form-control ${errors.image?.message?'is-invalid':'border border-success-subtle'}`} type="url" />
                        <img src={watchImage} className='img-thumbnail' style={{height: '400px', width: '100%'}} alt="" />
                         <div className="invalid-feedback">
                            {errors.image?.message}
                        </div>
                    </div>
                </div>
                <button type='submit' className='btn btn-success mt-2 d-inline-flex align-items-center'>
                    <FaPlus className='me-2' />
                    Create
                </button>
                <button onClick={reset} type='reset' className='btn btn-danger ms-2 mt-2 d-inline-flex align-items-center'>
                    <AiOutlineClose className='me-2' />
                    Cancel
                </button>
            </form>
        </div>
    )
}

