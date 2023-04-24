import React from "react";
import { Box } from "@mui/material";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {Link} from "react-router-dom";
import logo from '../../../assets/img/logo.png';
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <AppBar position="static" className="nav">
                <Toolbar variant="dense">
                    <Box className="cursor">
                       <img src={logo} alt="logo" />
                    </Box>

                    <Box display="flex" justifyContent="">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>

                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Produtos
                            </Typography>
                        </Box>

                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Plantar+
                            </Typography>
                        </Box>
                        
                        <Link to="/login" className="text-decorator-none">
                            <Box mx={1} className="cursor" >
                       
                            </Box>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;