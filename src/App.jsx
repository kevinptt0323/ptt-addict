import React from 'react';

import Paper from 'material-ui/Paper';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import grey from 'material-ui/colors/lightBlue';

import Home from './components/home.jsx';
import Question from './components/question.jsx';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: grey,
  },
});

const styles = {
  container: {
    padding: '16px',
    minWidth: '50%',
    minHeight: '80%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }

  nextPage = () => {
    this.setState({ page: this.state.page+1 });
  };

  render() {
    const {
      classes,
    } = this.props;
    const {
      page,
    } = this.state;

    let Component;

    switch(page) {
      case 0:
        Component = Home;
        break;
      case 1:
        Component = Question;
        break;
      default:
        Component = 'div';
        break;
    }

    return (
      <MuiThemeProvider theme={theme}>
        <Paper className={ classes.container }>
          <Component nextPage={ this.nextPage } />
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
