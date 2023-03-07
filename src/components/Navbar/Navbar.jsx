import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material";

import logo from "../../assets/prathi logo 2016.png"

const Navbar = () => {
    return (
        <AppBar postion="fixed" style={{boxShadow: 'none', borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}} color="inherit">
            <Toolbar>
                <Typography>
                    <img src={logo} alt="Commerse.js" height="150px "/>
                </Typography>
            </Toolbar>
            <div style={{ padding: "10px"}}></div>
            <div style={{}}>
                <IconButton aria-label='Show cart items'>
                    <Badge badgeContent={2}  color="secondary" style={{fontSize: "30px"}}></Badge>
                    <ShoppingCart style={{fontSize: "50px", justifyContent: "end"}}></ShoppingCart>

                </IconButton>
            </div>
        </AppBar>
    )
}

export default Navbar
