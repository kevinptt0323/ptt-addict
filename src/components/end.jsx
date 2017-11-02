import React from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class End extends React.Component {
  constructor(props) {
    super(props);
  }
  share() {
    FB.ui({
      method: 'share',
      href: 'https://developers.facebook.com/docs/',
    }, function(response){});
  }
  render() {
    const {
      score
    } = this.props;
    return [
      <Typography type='display3' align='center' gutterBottom>PTT addict</Typography>,
      <Typography type='display1' align='center' gutterBottom>測試你是否有 PTT 成癮症</Typography>,
      <Typography type='headline' align='center' gutterBottom>{ score } 分</Typography>,
      <Typography type='title' align='center' gutterBottom>輕度</Typography>,
      <Button raised color='primary' onClick={ this.share }><Typography>立即分享</Typography></Button>,
    ];
  }
}

export default End;
