import React from 'react'
import { makeStyles } from '@mui/styles';
import { Button,Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const useStyles = makeStyles(theme => ({
    media:{
      height:'250px',
      [theme.breakpoints.down('sm')]:{
        height:150,
      }
    },
    card:{
      marginBottom:theme.spacing(5),
    }
}))

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia 
        className={classes.media} 
        title="post"
        image="https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        >
          
        </CardMedia>
        <CardContent>
            <Typography gutterBottom variant="h5">My first Post</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique tenetur dolores accusantium tempora commodi ab, voluptatibus, rem officia odit temporibus corrupti alias a aliquam eveniet totam deleniti delectus ipsum provident.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique tenetur dolores accusantium tempora commodi ab, voluptatibus, rem officia odit temporibus corrupti alias a aliquam eveniet totam deleniti delectus ipsum provident.
            </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Share</Button>
        <Button size="small" color="primary">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default Post