import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import LeftMenu from './components/LeftMenu/LeftMenu'
import { toggleLeftMenu } from './actions/LeftMenuActions'

class App extends Component {
  render() {
    const { onToggleLeftMenuClick, leftMenuOpen } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the CSS3-React-Reference app.</h2>
        </div>
        <LeftMenu open={leftMenuOpen}/>
        <button onClick={onToggleLeftMenuClick}>Toggle left menu</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {leftMenuOpen: state.leftMenuOpen}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleLeftMenuClick: () => {
      dispatch(toggleLeftMenu())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
