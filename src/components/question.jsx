import React from 'react';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = {
  paper: {
    flex: 1,
    margin: '8px',
    minWidth: 'calc(50% - 16px)',
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
};

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { select: null };
  }
  handleSelect(page) {
    this.setState({ select: page });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.page !== nextProps.page) {
      this.setState({ select: null });
    }
  }
  render() {
    const {
      nextPage,
      addScore,
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
    } = question;
    if (type == "tf")
      options = [{
        description: "是",
        score,
      },{
        description: "否",
        score: 0,
      }]
    return [
      <Typography type='display1' align='center' gutterBottom>ptt-aholic - 第 { page } 題</Typography>,
      <Typography type='headline' align='left' gutterBottom style={{ maxWidth: '1200px' }}>
        { description }
        { images.map((src, index) => <img key={`${page}-img${index}`} src={src} style={{ maxWidth: '90%' }}/>) }
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
      <Button raised color='primary' onClick={ () => { addScore(options[select].score); nextPage(); }} disabled={this.state.select === null}>
        <Typography>{ last ? "看結果" : "下一題" }</Typography>
      </Button>,
    ];
  }
}

export default Question;

