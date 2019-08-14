import React, { Component, Fragment } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import { Iconfont } from './statics/iconfont/iconfont'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <Header />
        </Provider>
        <Iconfont />
        <GlobalStyle />
      </Fragment>
    )
  }
}



export default App;
