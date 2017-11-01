import React from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const question = "我們公司又要做一款新貼紙囉，之前的 Git 與 Javascript 貼紙團購反應熱烈，這次我們想約大家一起團購 #HTML5 貼紙！但這此有三種選項，有點難選，所以想問看看大家意見，在此想請大家投個票！ 😃 投票的選項請參考以下 W3C HTML5 Logo 頁面上的圖片";

const Question = ({ nextPage, question }) => {
  let {
    description,
    type,
    score,
    options,
  } = question;
  if (type == "tf")
    options = ["是", "否"].map(opt => ({
      description: opt,
      score,
    }));
  return [
    <Typography type='display1' align='center' gutterBottom>ptt-aholic - 問題一</Typography>,
    <Typography type='headline' align='left' gutterBottom style={{ maxWidth: '1200px' }}>{ description }</Typography>,
    <div style={{ display: 'flex' }}>
      {
        options.map(opt => (
          <Paper>{ opt.description }</Paper>
        ))
      }
    </div>
  ];
};

export default Question;

