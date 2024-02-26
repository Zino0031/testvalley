import { useState } from 'react';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

export default function PrimarySearchAppBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleProfileMenuOpen = () => {
    setProfileMenuOpen(true);
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleClose = () => {
    setMobileMenuOpen(false);
    setProfileMenuOpen(false);
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex flex-row">
            <div className=''>

           <img src='/logo.svg'/>
            </div>
              
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <button className=" flex items-center space-x-1">
                
                  <span className="text-sm text-[#00d094] "><MenuIcon />  카테고리</span>
                </button>
            
            </div>
              </div>
            </div>
          <div className="flex items-center">
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                className="block w-full pl-10 pr-40 py-2 border border-[1px] rounded-md leading-5 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-0 focus:border-white focus:placeholder-gray-500 sm:text-sm"
                type="text"
                placeholder="살까말까 고민된다면 검색해보세요!"
                aria-label="Search"
              />
            </div>
          </div>
                    </div>
          <div className="hidden md:block">
            
            <div className="ml-4 flex items-center md:ml-6">
                
              <div className="flex gap-1 items-center">
                <Image src="/nav.svg" width={30} height={30} />
                <span className="text-gray-800 text-[12px] font-semibold ml-2">로그인 / 회원가입</span>
              </div>
              
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleMobileMenuOpen}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0-4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 8a1 1 0 110-2h12a1 1 0 110 2H4z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button className="text-white flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4zM4 10a6 6 0 1112 0 6 6 0 01-12 0zm14 0a8 8 0 10-16 0 8 8 0 0016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Profile</span>
            </button>
          </div>
        </div>
      )}

      {profileMenuOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <button onClick={handleClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</button>
            <button onClick={handleClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">My account</button>
          </div>
        </div>
      )}
    </div>
  );
}
