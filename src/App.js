import React, { Component, Fragment } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import { Iconfont } from './statics/iconfont/iconfont'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
           <Router>
             <Header />
             <Route path="/" exact component={Home}/>
             <Route path="/detail" component={Detail}/>
           </Router>
        </Provider>
        <Iconfont />
        <GlobalStyle />
      </Fragment>
    )
  }
}



export default App;
