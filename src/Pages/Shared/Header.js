import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Services</a></li>
                            <li><a>Product</a></li>
                            <li><a>About Us</a></li>
                        </ul>
                    </div>
                    <sp className="btn btn-ghost normal-case text-xl">HaiDoc<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 -mt-3  ">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
                    </svg>
                    </sp>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Services</a></li>
                        <li><a>Product</a></li>
                        <li><a>About Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn border-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Header;