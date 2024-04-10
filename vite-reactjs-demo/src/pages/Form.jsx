import { useState } from 'react';


export default function Form() {
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });
    let handleInputValue = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    let submit = (e) => {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <div className='container'>
            <form action="" onSubmit={submit}>
                <h5 className="text-success fw-bolder py-3">Login</h5>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input 
                        onInput={handleInputValue} 
                        value={formState.email}
                        type="email" name='email' className='form-control' />
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input 
                        onInput={handleInputValue} 
                        value={formState.password}
                        type="password" name='password' className='form-control' />
                </div>
                <button className='btn btn-primary mt-2'>Login</button>
            </form>
        </div>
    )
}

