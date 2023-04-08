import { AppBar,Toolbar,Typography,Button,makeStyles,} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import logo from "./LOGO.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar   color="black" display="flex">
      <Toolbar style={{minHeight: "40px"}}>
        <Typography variant="h6" className={classes.title} style={{fontSize: "32px",fontWeight: "800"}} >
          <span style={{justifyContent:"center"}}>
          <img src={logo}  width="80" height="80px"></img><a style={{paddingLeft:"460px",fontSize:"50px"}}>ARES</a>
          </span>
        </Typography>
        
        <div style={{marginTop:"20px",padding:"20px"}}>
            
            <Button color="grey" onClick={() => handleClick("/Home")}>
                <Typography style={{fontSize:"18px",margin:"10px"}}>Home</Typography>
            </Button>
            <a>  </a>
            <Button color="grey" backgroundColor="grey" onClick={() => handleClick("/login")}>
                <Typography style={{fontSize:"18px",margin:"10px"}}>Login</Typography>
            </Button>
            <a>  </a>
            <Button color="grey" onClick={() => handleClick("/signup")}>
                <Typography style={{fontSize:"18px",margin:"10px"}}>SignUp</Typography>
            </Button>
        </div>  
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
