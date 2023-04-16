import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.scss'
import { deleteItem } from "../../store/cart";
function CartPage() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const getTotal = () => {
    let total = 0;
    if (cartItems.cartItems.length > 0) {
      for (let item of cartItems.cartItems) {
        total += item.price;
      }
    }
    return `$${total.toFixed(2)}`;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Box
      className="cart-page"
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={3} className="cart-paper">
        <h3 className="section-title">Order Summary</h3>
        <div className="cart-items">
          {cartItems.cartItems.length > 0 ? (
            cartItems.cartItems.map((product, idx) => (
              <div key={idx} className="cart-item">
                <span className="item-name">{product.name}</span>
                <span className="item-price">${product.price} <Button onClick={() => dispatch(deleteItem(product._id))}>Remove</Button></span>
                
              </div>
            ))
          ) : (
            <h1 align='center'>Your cart is empty!</h1>
          )}
        </div>
        <div className="total">
          <span className="total-label">Total:</span>
          <span className="total-value">{getTotal()}</span>
        </div>

        <h3>Payment Information</h3>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <h4>Billing Address</h4>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="City"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Postal Code"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <h4>Payment Details</h4>
              <TextField
                label="Card Number"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Expiry Date (MM/YY)"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="CVV"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default CartPage;
