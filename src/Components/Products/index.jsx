import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryProducts } from "../../store/categories";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Products.scss'
import { addItem } from "../../store/cart";

const Products = ({ selectedCategory }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) =>
      selectCategoryProducts(state, selectedCategory)
    );
    const handleChange = (product) => {
        dispatch(addItem(product));
    };
    return (
      <div className="cards">
        {products.map((product, idx) => (
            
            <Card sx={{ maxWidth: 275 } } key={idx}>
                <CardContent>                
                    <Typography variant="h5" component="div" align="left">
                        {product.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        ${product.price}
                    </Typography>
                    <Typography variant="body2">
                        Available: {product.inStock}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => handleChange(product)} size="small">Add to cart</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
          ))}
       
      </div>
    );
  };
  
  export default Products;