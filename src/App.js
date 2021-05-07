import './App.css';
import { Component } from 'react';
// import Form from './components/Form';
import FormUncontrolled from './components/FormUncontrolled';
// import Intro from './components/Intro';
//import Counter from './components/Counter';
//import Counter from './components/Intro';

class App extends Component{

  state = {
    name:"Sreeraj",
    place: "India"
  }

  render() {
    return(

      <div className="container"> 
        {/* <Intro/>
        <Counter/>
        <Form /> */}
        <FormUncontrolled/>
      </div>
    )
  }

  
  
  
}




export default App;
