import React from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const End = ({ score }) => {
  return [
    <Typography type='display3' align='center' gutterBottom>ptt-aholic</Typography>,
    <Typography type='display1' align='center' gutterBottom>測試你是否有 PTT 成癮症</Typography>,
    <Typography type='headline' align='center' gutterBottom>87 分</Typography>,
  ];
};

export default End;
