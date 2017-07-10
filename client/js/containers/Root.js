import React, { Component } from 'react';
import { CONFIG } from '../constants/Config.js';
import NProgress from 'nprogress';

import '../../css/reset.scss';
import  '../../css/fonts.scss';
import '../../css/index.scss';
import '../../css/list.scss';
import '../../css/nprogress.scss';
import '../../css/article.scss';
setTimeout(function(){
  //利用iframe的onload事件刷新页面
  if(typeof window !== 'undefined') {
    document.title = CONFIG.title;
    var iframe = document.createElement('iframe');
    iframe.style.visibility = 'hidden';
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.onload = function () {
      setTimeout(function () {
        document.body.removeChild(iframe);
      }, 0);
    };
    document.body.appendChild(iframe);
  }  
},0);

//按需异步加载分片打包
if (typeof require.ensure !== 'function') {
    require.ensure = function(dependencies, callback) {
        callback(require)
    }
}
const routes = {
  childRoutes:[{
    path:'/',
    component:require('./Main.js'),
    indexRoute:{
      getComponent(nextState,cb) {
        require.ensure([],require=>{
          cb(null,require('../components/Menu.js'))
        },'Menu')
      }
    },
    childRoutes:[{
      path:'all',
      getComponent(nextState,cb) {
        document.title = CONFIG.titleLoad;
        NProgress.start();
        require.ensure([],require=>{
          cb(null,require('./All.js'))
        },'all')
      }
    },{
      path:'archive',
      getComponent(nextState,cb) {
        document.title = CONFIG.titleLoad;
        NProgress.start();
        require.ensure([],require=>{
          cb(null,require('./Archive.js'))
        },'archive')
      }
    },{
      path:'tags',
      getComponent(nextState,cb) {
        document.title = CONFIG.titleLoad;
        NProgress.start();
        require.ensure([],require=>{
          cb(null,require('./Tags.js'))
        },'tags')
      }
    },{
      path:'search',
      getComponent(nextState,cb) {
        document.title = CONFIG.titleLoad;
        NProgress.start();
        require.ensure([],require=>{
          cb(null,require('./search.js'))
        },'search')
      }
    },{
      path:'post/:id',
      getComponent(nextState,cb) {
        document.title = CONFIG.titleLoad;
        NProgress.start();
        require.ensure([],require=>{
          cb(null,require('./Post.js'))
        },'post')
      }
    }]
  }]
};
//const routes = (
// <Route path="/" component={App}>
//    <IndexRoute component={Menu} />
//    <Route path="all" getComponent={All} />
//    <Route path="archive" getComponent={Archive} />
//    <Route path="tags" getComponent={Tags} />
//    <Route path="search" getComponent={Search}/>
//    <Route path="post/:id" getComponent={Post} />
//  </Route>
//);

export default routes;