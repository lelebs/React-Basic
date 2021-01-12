import './App.css';
import routes from './route.config';
import { Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      {routes.map((value, key)=>{
        return <Route key={key} 
                 path={value.path} 
                 exact={value.exact} 
                 component={value.component}
          ></Route>
      })}
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
