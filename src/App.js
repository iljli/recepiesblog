import React from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts';
import List from './components/List';
import {Route, Switch} from "react-router-dom";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    articles: [],
    dataLoaded: false
  }

  componentDidMount() {
    client.getEntries()
      .then((response) => {
        // console.log(response)
        this.setState({
          articles: response.items,
          dataLoaded: true
        })
      })
      .catch(console.error)
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <header>
            <div className='wrapper'>
              <span>Amaizing Colection of Recepies</span>
            </div>
          </header>

          <Switch>
            <Route path="/articles/:id?">
              <div>
                <List posts={this.state.articles} />
              </div>
              <main>
                <div className='wrapper'>
                  <Posts posts={this.state.articles} />
                </div>
              </main>
            </Route>
          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
