import React from 'react';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = {
  paper: {
    flex: 1,
    margin: '8px',
    width: 'calc(50% - 16px)',
    minWidth: '200px',
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    boxSizing: 'border-box',
    cursor: 'pointer',
  },
};

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { select: null };
  }
  handleSelect = (page) => {
    this.setState({ select: page });
  };
  handleAnswer = (index, score) => {
    const {
      addScore,
      nextPage,
      page,
    } = this.props;
    addScore(score);
    ga('send', 'event', 'examine', 'answer', page, index+1);
    nextPage();
  };
  componentWillReceiveProps(nextProps) {
    if (this.props.page !== nextProps.page) {
      this.setState({ select: null });
    }
  }
  render() {
    const {
      nextPage,
      page,
      last,
      question
    } = this.props;
    const { select } = this.state;
    let {
      description,
      type,
      score,
      options,
      images=[],
      links=[],
    } = question;
    if (type == "tf")
      options = [{
        description: "是",
        score,
      },{
        description: "否",
        score: 0,
      }]

    const linksComp = links.length ? <ul>{
      links.map(({ href, title }, index) => (
        <li key={`${page}-link${index}`}>
          <a href={href} target="_blank"><Typography type='title' style={{ display: 'inline-block', textDecoration: 'underline' }}>
            { title }
          </Typography></a>
        </li>
      ))
    }</ul> : null;
    return [
      <Typography type='display1' align='center' gutterBottom>第 { page } 題</Typography>,
      <Typography type='headline' align='left' gutterBottom style={{ maxWidth: '1200px' }}>
        { description }
        { linksComp }
        { images.map((src, index) => <div key={`${page}-img${index}`} style={{ maxWidth: '100%', padding: '16px', textAlign: 'center' }}>
            <img src={src} style={{ maxWidth: '100%' }}/>
          </div>) }
      </Typography>,
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
        {
          options.map((opt, index) => (
            <Paper
              key={`${page}-option${index}`}
              style={{...styles.paper, background: index == select ? '#999' : '#666' }}
              onClick={() => this.handleSelect(index)}>
              <Typography type='headline'>{ opt.description }</Typography>
            </Paper>
          ))
        }
      </div>,
      <Button raised color='primary' onClick={ () => { this.handleAnswer(select, options[select].score); }} disabled={this.state.select === null}>
        <Typography type='headline'>{ last ? "看結果" : "下一題" }</Typography>
      </Button>,
    ];
  }
}

export default Question;

