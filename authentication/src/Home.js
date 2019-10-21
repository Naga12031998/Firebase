import React from 'react'
import fire from './config/Fire';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout = (e) => {
        console.log('logged out')
        fire.auth().signOut();
    }
    render () {
        return(
            <div>
                <h1>You are Home</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home