// import logo from './logo.svg';
import './App.css';
import React from 'react'
// import FunctionUser from './Components/FunctionUser';
// import ClassUser from './Components/ClassUser';
// import Student from './Components/Student';
// import InputBox from './Components/InputBox';
// import HideShow from './Components/HideShow';
// import FormHandle from './Components/FormHandle';
// import Condition from './Components/Condition';
// import Login from './Components/Login';
// import FunctionProps from './Components/FunctionProps';
// import Render from './Components/Render';
// import CompDidMount from './Components/CompDidMount';
// import CompDidUpdate from './Components/CompDidUpdate';
// import ShouldCopmUpdate from './Components/ShouldCopmUpdate';
// import CompWillMount from './Components/CompWillMount';
// import UseEffect from './Components/UseEffect';
// import UseCss from './Components/UseCss';
// import Bootstrap from './Components/Bootstrap';
// import ArrayMap from './Components/ArrayMap';
// import BootstrapList from './Components/BootstrapList';
// import NestedArrayList from './Components/NestedArrayList';
// import ComponentLoop from './Components/ComponentLoop';
// import PureComponent from './Components/PureComponent';
// import UseMemo from './Components/UseMemo';
// import ClassRef from './Components/ClassRef';
// import FunctionRef from './Components/FunctionRef';
// import HocComp from './Components/HocComp'
// import HocGreen from './Components/HocGreen'
// import HocBlue from './Components/HocBlue'
// import HighOrderComp from './Components/HighOrderComp'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';
import PageNotFound from './Components/PageNotFound';

function App() {

  // function getData() {
  //   alert('Hello From React App!');
  // }
  // const[user , setUser] = React.useState("Harry Potter");
  // console.log("Working on Router");

  return (
    <div className="App">
      {/* <FunctionUser />
      <ClassUser />
      <Student fname={'Tom & Jerry'} email={'abc@gmail.com'} other={{address:'Delhi',mobile:123}}/>
      <HideShow />
      <FormHandle />
      <Condition />
      <Login />
      <FunctionProps data={getData} />
      <Render/>
      <CompDidMount />
      <CompDidUpdate/>
      <ShouldCopmUpdate />
      <CompWillMount /> */}
      {/* <UseEffect /> */}
      {/* <UseCss /> */}
      {/* <Bootstrap /> */}
      {/* <ArrayMap /> */}
      {/* <BootstrapList /> */}
      {/* <NestedArrayList /> */}
      {/* <ComponentLoop /> */}
      {/* <PureComponent /> */}
      {/* <UseMemo /> */}
      {/* <ClassRef />
      <FunctionRef /> */}
      {/* <HocComp cmp={HighOrderComp} />
      <HocGreen cmp={HighOrderComp} />
      <HocBlue cmp={HighOrderComp} /> */}
      <Router>
        <Navbar/>
        <Switch>
        <Route path="/about"> <AboutUs /></Route>
        <Route path="/contact"> <PageNotFound /></Route>
        <Route path="/" exact={true}> <HomePage /></Route>
        </Switch>
      </Router>
       </div>
  );
}


export default App;
