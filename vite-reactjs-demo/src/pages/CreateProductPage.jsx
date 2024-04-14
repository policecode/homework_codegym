import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { BsDash } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import * as yup from 'yup';
// Sử dụng React hook form

const schema = yup.object({
    title: yup.string().required(),
    price: yup.number().required().typeError('price is numbber'),
    photo: yup.string().url().required()
})
export default function CreateProductPage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    const handleSubmitProduct = (values) => {
        console.log(values);
    }
    return (
        <div className='container'>
            <form action="" onSubmit={handleSubmit(handleSubmitProduct)}>
                <h5 className="text-success fw-bolder py-3">Create Product</h5>
                <div className="row">
                    <div className="col-6 form-group mb-4">
                        <label className="form-label">Title</label>
                        <input
                            {...register('title')}
                            type="text" className='form-control' />
                        <span>{errors.title?.message}</span>
                    </div>
                    <div className="col-6 form-group mb-4">
                        <label className="form-label">Price</label>
                        <input
                            {...register('price')}
                            type="number" className='form-control' />
                        <span>{errors.price?.message}</span>
                    </div>
                    <div className="col-6 form-group mb-4">
                        <label className="form-label">Photo</label>
                        <input
                            {...register('photo')}
                            type="url" className='form-control' />
                        <span>{errors.photo?.message}</span>
                    </div>
                    <div className="col-6 form-group mb-4">
                        <label className="form-label">Have discount</label>
                        <div className="form-check">
                            <input
                                value={true}
                                type="radio" className="form-check-input" {...register('discount')} />
                            Yes
                        </div>
                        <div className="form-check">
                            <input
                                value={false}
                                type="radio" className="form-check-input" {...register('discount')} />
                            No
                        </div>
                    </div>
                    <div className="col-6 form-group mb-4">
                        <label className="form-label">Image</label>
                        <button className='ms-4 btn btn-sm btn-success'><FaPlus /></button>
                        <input
                            type="url" className='form-control' />
                        <button className='ms-4 btn btn-sm btn-danger'><BsDash /></button>
                        
                    </div>

                </div>
                <button type='submit' className='btn btn-primary mt-2'>Create</button>
                <button onClick={reset} type='reset' className='btn btn-warning mt-2'>Cancel</button>
            </form>
        </div>
    )
}

