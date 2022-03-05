import React from 'react'
import { makeStyles } from '@mui/styles';
import {Avatar, AvatarGroup, Container, Divider, ImageList, ImageListItem, Link, Typography } from '@mui/material'

const useStyles = makeStyles(theme => ({
  container:{
    paddingTop:theme.spacing(10),
    position:'sticky',
    top:0,
  },
  title:{
    fontSize:16,
    fontWeight:500,
    color:'#555',
  },
  link:{
    marginRight:theme.spacing(2),
    color:'#555',
    fontSize:16,
  }
}))


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  
];

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} >Online Friends</Typography>
      <AvatarGroup total={6}>
        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </AvatarGroup>
      <Typography>Gallery</Typography>
      <ImageList style={{marginBottom:20}}
      sx={{ width: 250, height: 250 }} cols={2} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

    <Typography>Categories</Typography>
    <Link href="#" className={classes.link} variant="body2">Sport</Link>
    <Link href="#" className={classes.link} variant="body2">Food</Link>
    <Divider flexItem style={{marginBottom:10}}/>
    <Link href="#" className={classes.link} variant="body2">Movies</Link>
    <Link href="#" className={classes.link} variant="body2">Science</Link>
    </Container>
  )
}

export default Rightbar