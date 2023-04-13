import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCategory } from "../../store/categories";
import './Categories.scss'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Products from "../Products";
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
      role="tabpanel"
      
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function BasicTabs() {
    console.log(process.env.REACT_APP_API)
    const { categories, selectedCategory } = useSelector((state) => state.categories);
    console.log(categories)
    const dispatch = useDispatch();
  
    const selectedIndex = categories.findIndex(
    (category) => category.category === selectedCategory
    );
    const [value, setValue] = useState(selectedIndex !== -1 ? selectedIndex : 0);
    useEffect(() => {
        const newIndex = categories.findIndex((category) => category.category === selectedCategory);
        if (newIndex !== -1) {
          setValue(newIndex);
        }
      }, [selectedCategory, categories]);
    const handleChange = (event, newValue) => {
        const selectedCategory = categories[newValue];
        dispatch(showCategory(selectedCategory));
        setValue(newValue);
    };
    
    return (
      <span>
      
        <h2 align="left">Browse our Categories</h2>
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                >
                {categories.map((category, index) => (
                    <Tab
                    key={category.name}
                    label={category.name}
                    {...a11yProps(index)}
                    />
                ))}
                </Tabs>
            </Box>
            {categories.map((category, index) => (
                <TabPanel key={category.name} value={value} index={index} name={category.name} role={category.name}>
                <span className="displayName">{category.name}</span>
                <br />
                <span className="description">{category.description}</span>
                <br />
                <Products selectedCategory={category} />
              </TabPanel>
            ))}
        </Box>
      </span>
    );
}

export const Categories = () => {
    const selectedCategory = useSelector((state) => state.categories.selectedCategory);
    return (
        <BasicTabs selectedCategory={selectedCategory} />
    );
}   