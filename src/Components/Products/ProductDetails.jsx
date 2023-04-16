import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { addItem } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../../store/product';
import './Products.scss'
function ProductDetails() {
    const dispatch = useDispatch();
    const handleChange = (product) => {
        dispatch(addItem(product));
    };
    const item = useSelector((state) => getProduct(state))
    const product = {
        name: item.payload.product.item[0]?.name,
        stock: item.payload.product.item[0]?.inStock,
        price: item.payload.product.item[0]?.price,
        details: 'This is a sample product description.',
        reviews: [
            {
                user: 'John Doe',
                comment: 'Great product!',
            },
            {
                user: 'Jane Doe',
                comment: 'I love it!',
            },
        ],
    };

    return (
        <Box sx={{ padding: 2 }} align='center'>
            <Paper sx={{ padding: '2rem', width: 900 }}>
                <Typography variant="h4" component="div" gutterBottom>
                    {product.name ? product.name : 'null'}
                </Typography>
                <Typography variant="subtitle1" component="div" gutterBottom>
                    In stock: {product.stock ? product.stock : 'null'}
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                    ${product.price ? product.price : 'null'}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleChange(product)}>
                    Add to Cart
                </Button>
                <Typography variant="h6" component="div" gutterBottom sx={{ marginTop: 2 }}>
                    Related Items
                </Typography>
                {/* Suggested item buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
                    <Button variant="outlined">Suggestion 1</Button>
                    <Button variant="outlined">Suggestion 2</Button>
                    <Button variant="outlined">Suggestion 3</Button>
                </Box>
                {/* Accordion sections */}
                <Box sx={{ marginTop: 2 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Product Details</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{product.details}</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>User Reviews</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {product.reviews.map((review, index) => (
                                <Typography key={index}>
                                    {review.user}: {review.comment}
                                </Typography>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Paper>
        </Box>
    );
}

export default ProductDetails;
