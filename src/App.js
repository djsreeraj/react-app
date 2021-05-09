import './App.css';
import { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
// import Form from './components/Form';
//import FormUncontrolled from './components/FormUncontrolled';
// import List from './components/List';
import Header from './components/Header/Header';
// import Intro from './components/Intro';
// import Counter from './components/Counter';
//import Counter from './components/Intro';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import TodoList from './components/TodoList/TodoList';

class App extends Component{

  // state = {
  //   name:"Sreeraj",
  //   place: "India"
  // }

  render() {
    return(

      <div className="container"> 
        <Router>
            <Header />
            <Route path="/" exact component={HomePage}  />
            <Route path="/about" component={About} />
            <Route path="/todo" component={TodoList} />


            {/* <List />
            <Counter/>
            <Form /> */}

        </Router>

        
        {/* <Intro/>
        
        <FormUncontrolled/> */}
        
      </div>
    )

  }

  
  
  
}




export default App;
