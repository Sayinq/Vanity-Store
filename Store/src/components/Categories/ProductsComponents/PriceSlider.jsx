import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
    return `${value}°C`;
  }
  
  export default function PriceSlider() {
    const [value, setValue] = React.useState([0, 50]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: 300 }}
        className="flex flex-col items-center bg-[#27272A] p-3 px-12 rounded-xl"
      >
        <span>Price Range</span>
        <Slider
          getAriaLabel={() => 'Price range'}
          value={value}
          max={50}
          min={0}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          color="secondary"
        />
      </Box>
    );
  }