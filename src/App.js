import React, { Component } from 'react';

// stateless component
import { Header } from './components/Header';
// stateful component
import Home from './components/Home';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      homeLink: "Home",
      homeMounted: true
    }
  }

  onGreet() {
    alert("Hello!");
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }

  render() {
    // var user = {
    //   name: "Ana",
    //   hobbies: ["Sports", "Reading"]
    // }
    let homeCmp = "";
    if (this.state.homeMounted) {
      homeCmp = (
        <Home
          name={"Mac"}
          initialAge={25}
          greet={this.onGreet}
          changeLink={this.onChangeLinkName.bind(this)}
          initialLinkName={this.state.homeLink}
        />
      );
    }
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-xs-offest-1">
              <Header homeLink={this.state.homeLink} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-xs-offest-1">
              {/* <Home name={"Mac"} age={25} user={user}>
                <p>This is a pragraph!</p>
              </Home> */}
              {/* <Home
                name={"Mac"}
                initialAge={25}
                greet={this.onGreet}
                changeLink={this.onChangeLinkName.bind(this)}
                initialLinkName={this.state.homeLink}
              /> */}
              { homeCmp }
            </div>
          </div><br />
          <div className="row">
            <div className="col-xs-12 col-xs-offest-1">
              <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
