import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

import '../index.css'
import Main from './client/home/index'
import Menu from './client/menu/containers/Menu'
import Access from './client/access/index'
import {noMatch} from './client/404/index';
import News from './client/news/containers'
import CoffeeList from './client/coffeeList/containers'
import Header from './client/header/Header'
import HeaderRight from './client/header/HeaderRight'
import SwitchLoading from './client/shared/ProgressBar'

class App extends React.Component<{}, { isLoading: boolean }> {
  state = { isLoading: false }

  componentDidMount() {
    setTimeout(() => {
      this.finishLoading()
    }, 1500)
  }

  finishLoading = () => {
    this.setState({ isLoading: true })
  }

  render() {
    const { state } = this
    const classes = this.props.classes
    return (
      <SwitchLoading isLoading={state.isLoading}>
        <Router className="root">
          <div className={classes.mainwrapper}>
            <div
              style={{
                transform: 'translate(100%, 0%) matrix(0, 0, 0, 1, 0, 0)'
              }}
              className={classes.masque}
            />
            <Header />
            <HeaderRight />
            <div className={classes.maincontents}>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/menu" component={Menu} />
                <Route path="/access" component={Access} />
                <Route path="/news" component={News} />
                <Route path="/coffeelist" component={CoffeeList} />
                <Route component={noMatch} />
              </Switch>
            </div>
          </div>
        </Router>
      </SwitchLoading>
    )
  }
}


const styles = theme => ({
  masque: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: '#fff',
    zIndex: '999',
    transformOrigin: '0 0',
    WebkitTransform: 'scale(1,1)',
    msTransform: 'scale(1,1)',
    transform: 'scale(1,1)'
  },
  mainwrapper: {
    width: '100%',
    WebkitFontSmoothing: 'antialiased'
  },
  maincontents: {
    [theme.breakpoints.up('md')]: {
      padding: '0 100px'
    }
  }
})

export default withStyles(styles)(App)
