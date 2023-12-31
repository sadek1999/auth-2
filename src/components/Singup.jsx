import React, { useContext } from 'react';
import { authContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

const Singup = () => {
    const navegat=useNavigate()

    const { creatUser } = useContext(authContext)
    const handlSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.reset()
        console.log(email, password)
        creatUser(email, password)
            .than(result => {
                console.log('successfully add the user', result)
                navegat('/')
            })
            .catch(error => console.error(error))
            
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sing up now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handlSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sing in" className='btn btn-primary' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Singup;