import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';

import CasesChart from './CasesChart';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 8
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  content: {
    height: 400
  }
});

const StatsCard = ({ title, location, isRegion }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="elevated">
      <CardHeader title={title} />
      <CardContent>
        <Typography>Words.</Typography>
        <CasesChart />
      </CardContent>
    </Card>
  );
};

export default StatsCard;
