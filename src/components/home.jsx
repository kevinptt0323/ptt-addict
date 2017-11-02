import React from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const Home = ({ nextPage }) => {
  return [
    <Typography type='display3' align='center' gutterBottom>PTT Addict</Typography>,
    <Typography type='display1' align='center' gutterBottom>測試你是否有 PTT 成癮症</Typography>,
    <Button raised color='primary' onClick={ nextPage }><Typography>開始測驗</Typography></Button>,
  ];
};

export default Home;
