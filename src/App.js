import React from 'react';
import {GlobalStyle} from './styles/GlobalStyles';
import {Logo} from './components/Logo';
import {PhotoCardWithQuery} from './container/PhotoCardWithQuery';
import {Home} from './pages/Home';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId ? <PhotoCardWithQuery id={detailId} /> :
        <Router>
          <Switch>
            <Route path='/pet/:id' component={Home} />
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      }
    </div>
  );
};
