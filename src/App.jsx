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
      score: 0,
    };
  }

  gaSetPage = () => {
    const { page } = this.state;
    if (page == 0) {
      ga('set', 'page', '#/home');
    } else if (page >= 1 && page <= data.questions.length) {
      ga('set', 'page', `#/questions/${page}`);
    } else {
      ga('set', 'page', '#/end');
    }
  };

  nextPage = () => {
    const { page } = this.state;
    this.setState({ page: page+1 });
    if (this.state.page == 0) {
      ga('send', 'event', 'examine', 'start');
    }
  };

  addScore = (score) => {
    this.setState({ score: this.state.score+score });
  }

  componentDidMount() {
    this.gaSetPage();
    ga('send', 'pageview');
  }

  componentDidUpdate() {
    this.gaSetPage();
    ga('send', 'pageview');
  }

  render() {
    const {
      classes,
    } = this.props;
    const {
      page,
      score,
    } = this.state;

    let Component;
    let props = {
      nextPage: this.nextPage,
      addScore: this.addScore,
      page,
    };

    if (page === 0) {
      Component = Home;
    } else if (page <= data.questions.length) {
      Component = Question;
      props.question = data.questions[page-1];
      if (page == data.questions.length)
        props.last = true;
    } else {
      Component = End;
      props.score = score;
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
