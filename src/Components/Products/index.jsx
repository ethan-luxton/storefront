import React from "react";
import { useSelector } from "react-redux";
import { selectCategoryProducts } from "../../store/categories";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Products.scss'

const Products = ({ selectedCategory }) => {
    const products = useSelector((state) =>
      selectCategoryProducts(state, selectedCategory)
    );
    console.log(products, selectedCategory)
    return (
      <div className="cards">
        {products.map((product, idx) => (
            <Card sx={{ maxWidth: 275 }}>
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
                    <Button size="small">Add to cart</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
          ))}
       
      </div>
    );
  };
  
  export default Products;