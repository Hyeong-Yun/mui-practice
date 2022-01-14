import { AppBar, makeStyles, Toolbar, Typography, Search, InputBase } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    logoLg:{
        display: "none",
        [theme.breakpoints.down('sm')]:{
            display: "block"
        }
    },
    logoSm:{
        display: "block",
        [theme.breakpoints.down('sm')]:{
            display: "none"
        }
    }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar>
        <Toolbar>
            <Typography variant="h6" className={classes.logoLg}>
              hello World
            </Typography>
            <Typography variant="h6"className={classes.logoSm}>
              hello
            </Typography>
            <div className={classes.search}>
                <Search />
                <InputBase placeholder="Search..."/>
            </div>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;