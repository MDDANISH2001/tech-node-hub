import React from "react";
import styles from './Header.module.css'
import {
    Avatar,
    Button,
    Container,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
} from "@mui/material";
import { LockOpen, Login, Settings } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function MenuBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <div className={styles.menu_box}>
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "right",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs = {8}>
                            <NavLink to ='/' className={styles.navlinks}>
                            <img src = './images/comp_logo.jpg' alt = 'org_logo' className={styles.org_logo}></img>
                            <div  className={styles.orgname}>
                                TechNode Hub
                            </div>
                            </NavLink>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs = {12}>

                            <Button
                                sx={{
                                    mr: 1,
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    textTransform: "capitalize",
                                    mt: 1,
                                }}
                                title="Home"
                                id="fade-button"
                            >
                                <NavLink to ='/' className={styles.navlinks} underline="none">
                                    Home
                                </NavLink>
                            </Button>
                            <Button
                                sx={{
                                    mr: 1,
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    textTransform: "capitalize",
                                    mt: 1,
                                }}
                                title="About Us"
                                id="fade-button"
                            >
                                <NavLink to ='/about' className={styles.navlinks} underline="none">
                                    About Us
                                </NavLink>
                            </Button>
                            <Button
                                sx={{
                                    mr: 1,
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    textTransform: "capitalize",
                                    mt: 1,
                                }}
                                title="Contact"
                                id="fade-button"
                            >
                                <NavLink to ='/Contact' className={styles.navlinks} underline="none">
                                    Contact
                                </NavLink>
                            </Button>
                            <Button
                                sx={{
                                    mr: 1,
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    textTransform: "capitalize",
                                    mt: 1,
                                }}
                                title="Team"
                                id="fade-button"
                                >
                                <NavLink to ='/Team' className={styles.navlinks} underline="none">
                                    Team
                                </NavLink>
                            </Button>
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ mt: 1 }}
                                    aria-controls={open ? "account-menu" : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                >
                                    <Avatar sx={{ width: 37, height: 37, color:'black' }}>D</Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu 
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                transformOrigin={{ horizontal: "right", vertical: "top" }}
                                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                                >
                                <MenuItem onClick={handleClose}>
                                    <LockOpen sx = {{fontSize:20,mr:2}}/>
                                    Signin
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Login sx = {{fontSize:20,mr:2}}/>
                                    Login
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Settings sx = {{fontSize:20,mr:2}}/>
                                    Settings
                                </MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </React.Fragment>
    );
}
