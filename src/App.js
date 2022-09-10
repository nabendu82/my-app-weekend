import './App.css';
import ListPost from './components/ListPost';
// import Counter from './components/Counter';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import { Greet, ReactGreet } from './components/Greet';
// import Greeting from './components/Greeting';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}
      {/* <Greeting name="JavaScript" year="1995">Language for the Web</Greeting>
      <Greeting name="Golang" year="2018" />
      <Greeting name="Swift" year="2010">Language for iOS apps</Greeting>
      <hr />
      <Welcome name="Flutter">Language for cross-mobile development</Welcome>
      <Welcome name="React Native" />
      <Welcome name="Java"><button>Click for Java</button></Welcome> */}
      <ListPost />
    </div>
  );
}

export default App;
