import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import ProductScreen from './Screens/ProductScreen';
import HomeScreen from './Screens/HomeScreen';



function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="/">amazona</a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
    <main>
    <div>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path='/' component={HomeScreen} exact></Route>
    </div>
    </main>
    <footer className="row center">All right reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
