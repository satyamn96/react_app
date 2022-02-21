// import logo from './logo.svg';
import './App.css';
// import FunctionUser from './Components/FunctionUser';
// import ClassUser from './Components/ClassUser';
// import Student from './Components/Student';
// import InputBox from './Components/InputBox';
// import HideShow from './Components/HideShow';
// import FormHandle from './Components/FormHandle';
// import Condition from './Components/Condition';
// import Login from './Components/Login';
import FunctionProps from './Components/FunctionProps';
function App() {

  function getData() {
    alert('Hello From React App!');
  }
  return (
    <div className="App">
      {/* <FunctionUser />
      <ClassUser /> */}
      {/* <Student fname={'Tom & Jerry'} email={'abc@gmail.com'} other={{address:'Delhi',mobile:123}}/> */}
      {/* <HideShow />
      <FormHandle /> */}
      {/* <Condition /> */}
      {/* <Login /> */}
      <FunctionProps data={getData} />
       </div>
  );
}

export default App;
