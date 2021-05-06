import './App.css';
import { Component } from 'react';
class App extends Component{

  state = {
    name:"Sreeraj",
    place: "India"
  }


  render() {
    return(

      <div className="container"> 
        <h1>   Hey, this is {this.state.name} from {this.state.place}.</h1>
        <br/>

        


      </div>
    )
  }

  
  
  
}




export default App;
