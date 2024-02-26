import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Cards from './Cards'; 

export default function TextMobileStepper({niche}) {
  const [steps, setSteps] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  const [itemsPerRow, setItemsPerRow] = useState(0);

  useEffect(() => {
    if (steps.length >= 4) {
      setItemsPerRow(4);
    } else {
      setItemsPerRow(steps.length);
    }
  }, [steps]);

  useEffect(() => {
    fetch('https://api.testvalley.kr/collections?prearrangedDiscount')
      .then(response => response.json())
      .then(data => {
        const filteredData = data.items.filter(item => item.type === "SINGLE" && item.viewType === "TILE" && item.title === niche);
        setBannerData(filteredData);
        const firstItem = filteredData[0];
        if (firstItem) {
          setSteps(firstItem.items);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [niche]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prevActiveStep => (prevActiveStep + 1) % (steps.length - itemsPerRow + 1));
    }, 3000); 

    return () => clearInterval(timer);
  }, [steps.length, itemsPerRow]);

  const handleNext = () => {
    setActiveStep(prevActiveStep => Math.min(prevActiveStep + 1, steps.length - itemsPerRow));
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => Math.max(prevActiveStep - 1, 0));
  };

  const startIndex = activeStep;
  const endIndex = Math.min(activeStep + itemsPerRow, steps.length);
  const displayed = steps.slice(startIndex, endIndex);

  return (
<Box className="flex flex-col mx-40 ">
  <Box className="max-w-full flex-grow md:flex flex-row gap-2 ">
        <Box classname="mb-2 m-10    ">
          <Typography  className='text-[22px] max-w-48 font-semibold mb-1 ' gutterBottom>{bannerData[0]?.title}</Typography>
          <Typography className='text-[12px] text-gray-400 font-semibold mb-6'>{bannerData[0]?.subtitle}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {displayed.map((items , index) => (
            <Box key={index} sx={{ p: 1, minWidth: 200, flexBasis: '25%' }}>
              <Cards item={items  } />
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
}
