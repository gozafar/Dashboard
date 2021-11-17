import React from "react";
import { Link } from "react-router-dom";
import catax from "../../src/catax.png";

function Header(props) {
  return (
    <div>
      <div>
        <nav className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="dashboard">
                    {" "}
                    <img className="h-8 w-30  " src={catax} alt="Workflow" />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      to="dashboard"
                      className="  px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Dashboard
                    </Link>

                    <Link
                      to="/accounts"
                      className=" px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Accounts
                    </Link>

                    <Link
                      to="/organization"
                      className=" px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Organazation
                    </Link>

                    <Link
                      to="/refferals"
                      className=" px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Refferals
                    </Link>

                    <Link
                      to="/table"
                      className=" px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Table
                    </Link>

                    <Link
                      to="/transaction"
                      className=" px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Transaction
                    </Link>

                    <Link
                      to="/users"
                      className=" px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Users
                    </Link>

                    <Link
                      to="/usersprofile"
                      className=" px-3 py-2 rounded-md text-sm font-medium"
                    >
                      UsersProfile
                    </Link>
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
