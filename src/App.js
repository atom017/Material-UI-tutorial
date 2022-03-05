import { Button, Grid } from "@mui/material";
import {Edit} from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'
import Add from "./components/Add";

const useStyles = makeStyles((theme) => ({
  
  button:{
    color:'blue',
    backgroundColor:'purple',
    border:'1px solid black'
  },
  right:{
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
  }
  
}))

function App() {
  const classes = useStyles()
  return (
    <div>
     <Navbar/>
     
     <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed/>
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar/>
        </Grid>
     </Grid>
     <Add/>
    </div>
  );
}

export default App;
