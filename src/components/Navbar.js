import { Cancel, Mail, Notifications, Search } from '@mui/icons-material'
import { alpha, AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React,{useState} from 'react'

const useStyles = makeStyles((theme) => ({
  toolbar:{
    display:'flex',
    justifyContent:'space-between'
  },
  logoLg:{
    display:'none',
    [theme.breakpoints.up('sm')]:{
      display:'block'
    }
  },
  logoSm:{
    display:'block',
    [theme.breakpoints.up('sm')]:{
      display:'none'
    }
  },

  search:{
    display:'flex',
    alignItems:'center',
    
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius:theme.shape.borderRadius,
    width:'40%',
    
    [theme.breakpoints.down('sm')]:{
      display:(props) => props.open ? 'flex':'none',
      width:'60%',
    }
  },

  input:{
    color:'#ffffff',
    width:'80%',
    marginLeft:theme.spacing(2)
  },

  cancel:{
    [theme.breakpoints.up('sm')]:{
      display:'none',
    }
  },

  searchButton:{
    marginRight:theme.spacing(2),
    [theme.breakpoints.up('sm')]:{
      display:'none'
    }
    
  },

  icons:{
    
    alignItems:'center',
    display:(props) => props.open ? 'none':'flex'
    
  },

  badge:{
    marginRight:theme.spacing(2)
  }
}))

const Navbar = () => {
  const [open,setOpen] = useState(false);
  const classes = useStyles({open});
  return (
   <AppBar position='fixed'>
       <Toolbar className={classes.toolbar}>
           <Typography variant="h6" className={classes.logoLg}>
             Ace Class
           </Typography>
           <Typography variant="h6" className={classes.logoSm}>
             ACE
           </Typography>
           <div className={classes.search}>
             <Search />
             <InputBase className={classes.input} placeholder='search...'/>
             <Cancel className={classes.cancel} onClick={() => setOpen(false)}/>
           </div>

           <div className={classes.icons}>
             <Search className={classes.searchButton} onClick={() => setOpen(true)}/>
            <Badge badgeContent={4} color="error" className={classes.badge}>
              <Mail color="action" />
              </Badge>

              <Badge badgeContent={2} color="error" className={classes.badge}>
              <Notifications color="action" />
              </Badge>
              <Avatar alt="Remy Sharp" 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
           </div>
       </Toolbar>
   </AppBar>
  )
}

export default Navbar