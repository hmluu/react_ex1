import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      show: false
    };
  this.usernameChanged = this.usernameChanged.bind(this);
  this.formSubmitted = this.formSubmitted.bind(this);
  }
usernameChanged(event){
    this.setState({
      username: event.target.value,
      show: false
    });
  }
formSubmitted(event){
  event.preventDefault();

  this.setState({
    show: true
  })
}
  render() {
    return (
      <div className="container mt-5">
      {this.state.show ? <h1>Hello, {this.state.username} </h1> : ''}
      <form onSubmit={this.formSubmitted}>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input onChange={this.usernameChanged}  value={this.state.username} type="text" className="form-control" placeholder="Name"/>
        </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block">Say Hello </button>
      </form>
      </div>
    );
  }
}

export default App;
