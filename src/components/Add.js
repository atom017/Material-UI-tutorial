import React,{useState} from 'react'
import { makeStyles } from '@mui/styles';
import { Tooltip,IconButton, Modal, Container, TextField, MenuItem, RadioGroup, FormControlLabel, Radio, FormLabel, Button} from '@mui/material';
import {AddCircle,Delete} from '@mui/icons-material';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const useStyles = makeStyles(theme => ({
    fab:{
        position:'fixed',
        bottom:20,
        right:20,
    },
    container:{
        width:500,
        height:500,
        backgroundColor:'white',
        color:'black',
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        margin:'auto',
        [theme.breakpoints.down('sm')]:{
            width:'100vw',
            height:'100vh'

        }
    },
    
    form:{
        padding:theme.spacing(2),
        
    },

    item:{
        marginBottom:theme.spacing(3),
    }
  }))

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Add = () => {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [openAlert,setOpenAlert] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };

    const handleCreate = () =>{
        setOpenAlert(true);
        setOpen(false);
    }
    
  return (
    <>
    <Tooltip title="Add Post" onClick={() => setOpen(true)}>
        <IconButton color="primary" className={classes.fab}>
            <AddCircle />
        </IconButton>
    </Tooltip>
    <Modal open={open}>
        <Container className={classes.container}>
            <form className={classes.form} autoComplete="off">
                <div className={classes.item}> 
                <TextField id="standard-basic" label="Title" size='sm' variant="standard" style={{width:'100%'}}/>
                </div>
                <div className={classes.item}> 
                <TextField id="standard-basic" 
                label="Description" size='sm' multiline
                placeholder='tell your story'
               
          maxRows={4} style={{width:'100%'}}/>
                </div>

                <div className={classes.item}>
                    <TextField select label="visibility" value='public'>
                        <MenuItem value='public'>Public</MenuItem>
                        <MenuItem value='private'>Private</MenuItem>
                        <MenuItem value='unlisted'>Unlisted</MenuItem>
                    </TextField>
                </div>

                <div className={classes.item}>
                <FormLabel id="demo-radio-buttons-group-label">Who can comment</FormLabel>
                    <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="nobody"
                    name="radio-buttons-group"
                    >
                    <FormControlLabel value="everyone" control={<Radio size='small'/>} label="Everyone" />
                    <FormControlLabel value="friends" control={<Radio size='small'/>} label="Friends" />
                    <FormControlLabel value="nobody" control={<Radio size='small'/>} label="Nobody" />
                    <FormControlLabel disabled value="custom" control={<Radio size='small'/>} label="Custom (premium)" />
                    </RadioGroup>
                </div>

                <div className={classes.item}>
                    <Button 
                    color="primary" 
                    variant="outlined"
                     style={{marginRight:20}}
                     onClick={handleCreate}
                     >Create</Button>
                    <Button 
                    color="error" 
                    variant="outlined"
                    onClick={()=>setOpen(false)}
                    >Cancel</Button>
                </div>
            </form>
        </Container>
    </Modal>

    <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Post Created Successfully!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Add