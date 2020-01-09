import React from 'react';
import { Menu, MenuItem, Button } from '@material-ui/core';
// import { Link } from '../routes';

export default () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        // <Menu style={{ marginTop: '10px' }}>
        //     <Link route="/">
        //         <a className="item">CrowdCoin</a>
        //     </Link>
            
        //     <Menu.Menu position="right">
        //         <Link route="/">
        //             <a className="item">Campaigns</a>
        //         </Link>
                
        //         <Link route="/campaigns/new">
        //             <a className="item">+</a>
        //         </Link>
        //     </Menu.Menu>
        // </Menu>
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}