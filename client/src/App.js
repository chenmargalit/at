import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Form from './components/Form';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Nav from './components/Nav';
// import Playground from './components/Playground';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Fragment>
          <Nav />
          <Route path='/at' exact component={Home} />
          <Route path='/at/add-check' component={Form} />
          <Route path='/at/signin' component={Signin} />
          <Route path='/at/signup' component={Signup} />
        </Fragment>
      </BrowserRouter>
      {/* <Playground /> */}
    </div>
  );
}

export default App;
