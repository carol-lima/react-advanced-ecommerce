import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// Header is always rendered despite whatever react router, switch component decide to render onto the page.
function App() {
  return (
    <div>
      <Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </Header>
    </div>
  );
}

export default App;
