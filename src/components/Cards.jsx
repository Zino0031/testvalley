import React from 'react';

const Cards = ({ item ,steps }) => {
   console.log(item);
  return (
<div className='flex '>
      <div className='relative'>

      <div className="flex flex-col w-60 ml-1 relative"> 
        <img
          src={item.publication.media[0].uri}
          alt={`Slide`}
          className="w-60 h-auto"
        />
        {item.publication.tagsOnImage == "" ? null : 
          <div className="bg-[#009e8a] text-white text-center p-1 rounded-sm absolute bottom-2 left-2  ">
            <span className='flex gap-2 text-[10px]'>
              <img src='/tag.svg' /> {item.publication.tagsOnImage}
            </span>
          </div>
        }
        </div>
          <div className='flex flex-col gap-4 p-4'>

            <h3 className=' h-12 overflow-hidden '>{item.publication.title}</h3>
            <div className='flex'>
            <p className=' text-center text-xl font-medium text-red-500 whitespace-normal'>
            {item.publication.priceInfo.discountRate ? `${item.publication.priceInfo.discountRate}%` : item.publication.priceInfo.couponDiscountRate ? `${item.publication.priceInfo.couponDiscountRate}%` : null}

            </p>
            <p className=' text-center text-xl font-medium text-gray-700 whitespace-normal'>
            {item.publication.priceInfo.discountPrice ? item.publication.priceInfo.discountPrice : (item.publication.priceInfo.couponDiscountPrice ? item.publication.priceInfo.couponDiscountPrice : item.publication.priceInfo.price)}
            </p>
            <p className='   font-medium text-gray-700 whitespace-normal'>
           원
            </p>
           </div>
            {item.publication.tagsOnDesc == "" ? null : <p className='text-[12px] font-medium  '>
                <span className='bg-gray-200 rounded-md p-1'>
            {item.publication.tagsOnDesc}
                </span>
              </p> }
            
            <p className=' text-sm  font-medium text-gray-700 whitespace-normal'>
            ★{item.publication.rating}
            </p>
          

            {item.publication.prefaceIconUrl == "" ? null :  <span className=' text-[10px]  font-medium text-gray-700 whitespace-normal flex gap-1 '>
              <span className='  border-[1px]  p-1 rounded-sm  bottom-2 left-2 flex gap-1'>
            <img className='w-3' src={item.publication.prefaceIconUrl}/> {item.publication.preface}
              </span>
            </span>}
           
         
          </div>
        </div>
    
    </div>
  );
};

export default Cards;
