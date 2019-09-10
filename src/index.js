import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './views/register/index';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes.config';
import RouteView from './RouteView'
import api from './api/index'
import 'antd/dist/antd.css'
React.Component.prototype.$api = api
ReactDOM.render(
   <BrowserRouter>
      <RouteView routes={routes}>
         <Index />
      </RouteView>
   </BrowserRouter>
, document.getElementById('root'));
