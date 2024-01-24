import React from 'react';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Set the initial left position based on whether the menu is open or closed
  const initialLeftPosition = isMenuOpen ? 'left-0' : '-left-full';

  // Set the overlay opacity based on the menu state
  const overlayOpacity = isMenuOpen ? 'opacity-50' : 'opacity-0';

  const zIndex = isMenuOpen ? "z-50":"-z-50";

  

  return (
    <div className='relative'>
      {/* Overlay for fading effect */}
      <div
        className={`fixed  left-10 w-full h-full bg-black ${overlayOpacity} transition-opacity ease-in-out duration-300 ${zIndex}`}
      ></div>

      {/* Sidebar */}
      <div
        className={`p-5 shadow-lg w-1/10 flex flex-col gap-3 bg-slate-300 transition-all ease-in-out duration-300 fixed z-50 h-full ${initialLeftPosition}`}
      >
        <ul className='sticky'>
          <li>Home</li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>

        <h1 className='font-bold'> Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h1 className='font-bold'> Watch later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
