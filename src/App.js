import React from "react";
import catax from "../src/catax.png";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Accounts from "./components/Accounts";
import Organazation from "./components/Organazation";
import Refferals from "./components/Refferals";
import Table from "./components/Tables";
import Transaction from "./components/Transaction";
import Users from "./components/Users";
import UsersProfile from "./components/UsersProfile";
import Header from "./components/Header";
import Layout from "./layout";
import EmployeForm from "./components/EmployeForm";
import Message from "./components/Message";
import Home from "../src/components/Home/Home";
// import Login from '../src/components/Home/Login'
import SignUp from "../src/components/Home/SignUp";
import Dash from "./components/Dash";
import Success from "./components/Home/Success";
import Search from "./././components/Home/Search";
import Heading from "./components/head/Heading";

function App(props) {
  const DashBoard = () => (
    <Layout>
      <Dashboard />
    </Layout>

    //  {/* <div><Header />
    //     <Dashboard /></div> */}
  );
  const DashAccounts = () => (
    <Layout>
      <Accounts />
    </Layout>

    // {/* <div><Header />
    //   <Accounts /></div> */}
  );
  const DashOrganazation = () => (
    <Layout>
      <Organazation />
    </Layout>
  );
  const DashRefferals = () => (
    <Layout>
      <Refferals />
    </Layout>
  );
  const DashTable = () => (
    <Layout>
      <Table />
    </Layout>
  );
  const DashTransaction = () => (
    <Layout>
      <Transaction />
    </Layout>
  );
  const DashUsers = () => (
    <Layout>
      <Users />
    </Layout>
  );
  const DashUsersProfile = () => (
    <Layout>
      <UsersProfile />
    </Layout>
  );
  const DasRoute = () => (
    <Layout>
      <Dash />
    </Layout>
  );

  return (
    <div>
      {/* <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-36"
                  src={catax}
                  alt="Workflow"
                />
              </div> */}
      <BrowserRouter>
        {/* <div className="hidden md:block"> */}
        {/* </div> */}
        <Switch>
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/accounts" component={DashAccounts} />
          <Route exact path="/organization" component={DashOrganazation} />
          <Route exact path="/refferals" component={DashRefferals} />
          <Route exact path="/table" component={DashTable} />
          <Route exact path="/transaction" component={DashTransaction} />
          <Route exact path="/users" component={DashUsers} />
          <Route exact path="/usersprofile" component={DashUsersProfile} />
          <Route exact path="/employeform" component={EmployeForm} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dash" component={DasRoute} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/heading" component={Heading} />
        </Switch>
      </BrowserRouter>
      {/* </div> */}

      {/* // </div> */}
      {/* //   </div> */}

      {/* // </nav> */}

      <div></div>
    </div>
  );
}

export default App;
