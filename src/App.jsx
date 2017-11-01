import React from 'react';

import Paper from 'material-ui/Paper';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import grey from 'material-ui/colors/lightBlue';

import Home from './components/home.jsx';
import Question from './components/question.jsx';
import End from './components/end.jsx';

import data from './data.json';

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
    let props = {
      nextPage: this.nextPage,
    };

    if (page === 0) {
      Component = Home;
    } else if (page <= data.questions.length) {
      Component = Question;
      props.question = data.questions[page-1];
      props.page = page;
      if (page == data.questions.length)
        props.last = true;
    } else {
      Component = End;
    }

    return (
      <MuiThemeProvider theme={theme}>
        <Paper className={ classes.container }>
          <Component {...props}/>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
