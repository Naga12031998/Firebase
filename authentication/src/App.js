import React from 'react';
import './App.css';
import fire from './config/Fire';
import Login from './Login'
import Home from './Home'

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user : {},
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user) {
        this.setState({user});
      }
      else {
        this.setState({user : null})
      }
    })
  }
  render() {
    return(
      <div>
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    )
  }
}


export default App;
