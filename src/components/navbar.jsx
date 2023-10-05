import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from './AuthProvider';


const Navbar = () => {
    const { user, usersingout } = useContext(authContext)
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/singin'}>Sing in</NavLink></li>
        <li><NavLink to={'/singup'}>Sing up</NavLink></li>
        <li><NavLink to={'/profile'}>profile</NavLink></li>
    </>
    const handlSingout = () => {
        usersingout()
            .then(result => console.log('sing out successfully', result))
            .catch(error => console.error(error.message))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            
            <div className="navbar-end">
            {
                user&& <span>{user.email}</span>
            }
                <button onClick={handlSingout} className="btn">Sing Out</button>

            </div>
        </div>
    );
};

export default Navbar;