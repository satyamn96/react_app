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
import ShouldCopmUpdate from './Components/ShouldCopmUpdate';
import CompWillMount from './Components/CompWillMount';
function App() {

  // function getData() {
  //   alert('Hello From React App!');
  // }
  // const[user , setUser] = React.useState("Harry Potter");

  return (
    <div className="App">
      {/* <FunctionUser />
      <ClassUser /> */}
      {/* <Student fname={'Tom & Jerry'} email={'abc@gmail.com'} other={{address:'Delhi',mobile:123}}/> */}
      {/* <HideShow />
      <FormHandle /> */}
      {/* <Condition /> */}
      {/* <Login /> */}
      {/* <FunctionProps data={getData} /> */}
      {/* <Render/> */}
      {/* <CompDidMount /> */}
      {/* <CompDidUpdate/> */}
      <ShouldCopmUpdate />
      <CompWillMount />
       </div>
  );
}

export default App;
