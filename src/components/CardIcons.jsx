import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Card = ({ title, imageUrl, linkUrl }) => {
  return (
    <Link href={linkUrl} className="flex flex-col justify-center items-center ">
      <img className="w-[80%] md:max-w-[55%]" src={imageUrl} alt={title} />
      <div className="">
        <div className="text-[10px] flex justify-center items-center mt-2 mb-2">{title}</div>
      </div>
    </Link>
  );
};

const CardIcons = () => {
  const [shortcutData, setShortcutData] = useState([]);

  useEffect(() => {
    fetch('https://api.testvalley.kr/main-shortcut/all')
      .then(response => response.json())
      .then(data => {
        setShortcutData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mx-10 md:mx-40 ">
      <div className="flex flex-row w-full md:w-1/2">
        {shortcutData.slice(0, 5).map(shortcut => (
          <div key={shortcut.mainShortcutId} className="w-full md:w-1/2 lg:w-1/5 ">
            <Card
              title={shortcut.title}  
              imageUrl={shortcut.imageUrl}
              linkUrl={shortcut.linkUrl}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row w-full md:w-1/2">
        {shortcutData.slice(5).map(shortcut => (
          <div key={shortcut.mainShortcutId} className="w-full md:w-1/2 lg:w-1/5">
            <Card
              title={shortcut.title}  
              imageUrl={shortcut.imageUrl}
              linkUrl={shortcut.linkUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardIcons;
