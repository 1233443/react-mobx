import SC from 'soundcloud';
import React from 'react';
import ReactDOM,{render} from 'react-dom';
import {Router,applyRouterMiddleware,Route,IndexRoute,hashHistory} from 'react-router';
import { useScroll } from 'react-router-scroll';


import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import stores from './stores';


import App from './components/App';
import Callback from './components/Callback';
import StreamContainer from './components/Stream';

//useStrict(true);//严格模式下，只有标记了@action的函数或在runInAction中的代码，才能修改state

ReactDOM.render(
  <Provider {...stores}>
    <Router history={hashHistory}  render={applyRouterMiddleware(useScroll())}>
      <Route path="/" component={App}>
        <IndexRoute component={StreamContainer} />
        <Route path="/" component={StreamContainer} />
        <Route path="/callback" component={Callback} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);