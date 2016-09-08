import SC from 'soundcloud';
import React from 'react';
import ReactDOM,{render} from 'react-dom';
import {Router,applyRouterMiddleware,Route,IndexRoute,hashHistory} from 'react-router';
import { useScroll } from 'react-router-scroll';

import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';

import stores from './stores';
import routers from "./router";
useStrict(true);//严格模式下，只有标记了@action的函数或在runInAction中的代码，才能修改state

import 'uxcore/assets/iconfont.css';
import 'uxcore/assets/orange.css';
import "../css/iconfont.css";
import "../css/updata.css";
import "../css/common.css";

ReactDOM.render(
  <Provider {...stores}>
    <Router history={hashHistory}  render={applyRouterMiddleware(useScroll())}>
      {routers}
    </Router>
  </Provider>,
  document.getElementById('app')
);