import React from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class End extends React.Component {
  constructor(props) {
    super(props);
  }
  share = () => {
    FB.ui({
      method: 'share',
      href: window.location + "",
      quote: `檢驗報告指出，我有 ${this.props.score} % 的 PTT 成癮症！`,
      hashtag: '#PTT戒斷中',
    }, function(response){});
  };
  render() {
    const { score } = this.props;
    let description = "";
    if (score<70) {
      description = "你有輕度的 PTT 成癮症，適時瀏覽 PTT，增強體魄！";
    } else if (score >= 70 && score < 85) {
      description = "你有中度的 PTT 成癮症，逛 PTT 30 分鐘記得休息 5 分鐘哦！";
    } else if (score >= 85 && score < 100) {
      description = "你有重度的 PTT 成癮症，建議趕快刪掉 PTT 瀏覽器，及早發現及早治療。";
    } else if (score >= 100) {
      description = "你的 PTT 成癮症已經病入膏肓了，只希望你還撐的下去...。"
    }
    return [
      <Typography type='display3' align='center' gutterBottom>PTT Addict</Typography>,
      <Typography type='display1' align='center' gutterBottom>測試你是否有 PTT 成癮症</Typography>,
      <Typography type='headline' align='center' gutterBottom>{ score } 分</Typography>,
      <Typography type='title' align='center' gutterBottom>{ description }</Typography>,
      <Button raised color='primary' onClick={ this.share }><Typography>分享至 Facebook</Typography></Button>,
    ];
  }
}

export default End;
