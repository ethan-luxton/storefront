import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../store/cart";
import { Link } from "react-router-dom";
import './Cart.scss'
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  },
}));
let badgeNum = undefined;
function Cart() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const cartItems = useSelector((state) => state.cart);
  const cartItemNum = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    
    setAnchorEl(null);
  };
  badgeNum = cartItemNum.cartItemNum > 0 ? cartItemNum.cartItemNum : '0';
  return (
    <div>
      
        <IconButton aria-label="cart"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          color="inherit"
          role='shoppingCart'

        >
          <StyledBadge badgeContent={badgeNum} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
  
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <div className='cartBlock'>
      {cartItems.cartItems.length > 0 ? 
        cartItems.cartItems.map((product, idx) => (
       
            <span key={idx}>{product.name} ${product.price}<Button onClick={() => dispatch(deleteItem(product._id))}>Remove</Button></span>

        )) : <MenuItem onClick={handleClose}>Your cart is empty!</MenuItem>}
        <Link role='cartLink' align="center" to={'/cart'}>Checkout</Link>
      </div>
      
        
        
      </Menu>
    </div>
  );
}
export {badgeNum}

export default Cart