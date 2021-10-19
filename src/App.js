import React from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts';
import List from './components/List';

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
        console.log(this.state.articles)
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
            <div className='wrapper' id="home">
              <span>Amaizing Colection of Recepies</span>
            </div>
          </header>

          <div>
            <List posts={this.state.articles} />
          </div>

          <main>
            <div className='wrapper'>
              <Posts posts={this.state.articles} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
