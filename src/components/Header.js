import React from 'react';
import { Link } from "react-router-dom";
import catax from '../../src/catax.png'



function Header(props) {
    return (
        <div>
            <div>
                <nav className="">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-8 w-30 "
                                        src={catax}
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <a
                                            href="#"
                                            className="  px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            <Link to="/">Dashboard</Link>

                                        </a>

                                        <a
                                            href="#"
                                            className=" px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            <Link to="/accounts">Accounts</Link>

                                        </a>



                                        <Link to="/organization" className=" px-3 py-2 rounded-md text-sm font-medium">Organazation</Link>



                                        <a
                                            href="#"
                                            className=" px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            <Link to="/refferals">Refferals</Link>

                                        </a>

                                        <a
                                            href="#"
                                            className=" px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            <Link to="/table">Table</Link>

                                        </a>
                                        <a
                                            href="#"
                                            className=" px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            <Link to="/transaction">Transaction</Link>

                                        </a>
                                        <a
                                            href="#"
                                            className=" px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            <Link to="/users">Users</Link>

                                        </a>

                                        <a
                                            href="#"
                                            className=" px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            <Link to="/usersprofile">UsersProfile</Link>

                                        </a>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </nav>


            </div>
        </div>
    );
}

export default Header;