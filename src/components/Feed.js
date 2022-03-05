import React from 'react'
import { makeStyles } from '@mui/styles';
import {Container, Typography } from '@mui/material'
import Post from './Post';

const useStyles = makeStyles(theme => ({
  container:{
    paddingTop:theme.spacing(10)
  },
}))

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Container>
  )
}

export default Feed