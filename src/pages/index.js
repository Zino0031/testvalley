import Carousels from '@/components/Carousels'
import CardIcons from '@/components/CardIcons'
import React, { useEffect, useState } from 'react';
import SmallSlider from '@/components/SmallSlider'
import Navbar from '@/components/Navbar'
export default function Home() {
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    fetch('https://api.testvalley.kr/collections?prearrangedDiscount')
      .then(response => response.json())
      .then(data => {
       
        const filteredData = data.items.filter(item => item.type === "SINGLE" && item.viewType === "TILE");
        setBannerData(filteredData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>

      <Carousels />
      <div className=' mt-10 mb-10'>
      <CardIcons />
      </div>
      {bannerData.map((items, index) => (
            <div key={index}>
              <div className='flex'>
              <SmallSlider niche={items.title} />
              </div>
            </div>
          ))}
     
 
        </div>
    
  );
}
