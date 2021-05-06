import './App.css';
import { Component } from 'react';
import Form from './components/Form';
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
        <Form />
      </div>
    )
  }

  
  
  
}




export default App;
