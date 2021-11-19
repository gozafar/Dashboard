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
import Layout1 from "./components/File/Layout1";
import EmployeForm from "./components/EmployeForm";
import Message from "./components/Message";
import Home from "../src/components/Home/Home";
// import Login from '../src/components/Home/Login'
import SignUp from "../src/components/Home/SignUp";
import Dash from "./components/Dash";
import Success from "./components/Home/Success";
import Search from "./././components/Home/Search";
import Heading from "./components/main/Heading";

// import from components/files for navigation
import Account from "./components/File/Account";
import Billing from "./components/File/Billing";
import Dashboards from "./components/File/Dashboards";
import Emails from "./components/File/Emails";
import Logout from "./components/File/Logout";
import Organizations from "./components/File/Organizations";
import Profile from "./components/File/Profile";
import Registraion from "./components/File/Registraion";
import Setting from "./components/File/Setting";
import Task from "./components/File/Task";
import Tickests from "./components/File/Tickests";
import Transactions from "./components/File/Transactions";
// components/files for navigation completed

// import from components/files/GraphNav for navigation
//
import GraphNav from "./components/File/Garph/GraphNav";
import LayoutGraph from "./components/File/Garph/LayoutGraph";
import MonthGraph from "./components/File/Garph/MonthGraph";
import WeekGraph from "./components/File/Garph/WeekGraph";
import Tasks from "./components/Tasks";
function App(props) {
  const DashBoard = () => (
    <Layout>
      <Dashboard />
    </Layout>
  );
  const DashAccounts = () => (
    <Layout>
      <Accounts />
    </Layout>
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

  {
    /* calling from files  */
  }
  const DashAccount = () => (
    <Layout1>
      <Account />
    </Layout1>
  );
  const DashBilling = () => (
    <Layout1>
      <Billing />
    </Layout1>
  );
  const DashDashboards = () => (
    <Layout1>
      <Dashboards />
    </Layout1>
  );
  const DashEmails = () => (
    <Layout1>
      <Emails />
    </Layout1>
  );
  const DashLogout = () => (
    <Layout1>
      <Logout />
    </Layout1>
  );
  const DashOrganizations = () => (
    <Layout1>
      <Organizations />
    </Layout1>
  );
  const DashProfile = () => (
    <Layout1>
      <Profile />
    </Layout1>
  );
  const DashRegistraion = () => (
    <Layout1>
      <Registraion />
    </Layout1>
  );
  const DashSetting = () => (
    <Layout1>
      <Setting />
    </Layout1>
  );
  const DashTask = () => (
    <Layout1>
      <Task />
    </Layout1>
  );
  const DashTickests = () => (
    <Layout1>
      <Tickests />
    </Layout1>
  );
  const DashTransactions = () => (
    <Layout1>
      <Transactions />
    </Layout1>
  );

  /* import from components/files/GraphNav for navigation */
  const DashWeekGraph = () => (
    <LayoutGraph>
      <Dashboards />
      <MonthGraph />
    </LayoutGraph>
  );
  const DashMonthGraph = () => (
    <LayoutGraph>
      <Dashboards />
      <WeekGraph />
    </LayoutGraph>
  );

  return (
    <div>
      <BrowserRouter>
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
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dash" component={DasRoute} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/heading" component={Heading} />
          {/* calling from files  */}
          <Route exact path="/account" component={DashAccount} />
          <Route exact path="/billing" component={DashBilling} />
          <Route exact path="/dashboards" component={DashDashboards} />
          <Route exact path="/emails" component={DashEmails} />
          <Route exact path="/logout" component={DashLogout} />
          <Route exact path="/organizations" component={DashOrganizations} />
          <Route exact path="/profile" component={DashProfile} />
          <Route exact path="/registration" component={DashRegistraion} />
          <Route exact path="/setting" component={DashSetting} />
          <Route exact path="/task" component={DashTask} />
          <Route exact path="/tickests" component={DashTickests} />
          <Route exact path="/transactions" component={DashTransactions} />
          {/* import from components/files/GraphNav for navigation */}

          <Route exact path="/monthgraph" component={DashMonthGraph} />
          <Route exact path="/weekgraph" component={DashWeekGraph} />
          <Route exact path="/graphnav" component={GraphNav} />
          <Route exact path="/Tasks" component={Tasks} />

        </Switch>
      </BrowserRouter>
      <div></div>
    </div>
  );
}

export default App;
