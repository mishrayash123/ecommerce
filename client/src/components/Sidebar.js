import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <button
        className="p-4 focus:outline-none md:hidden ml-8"
        onClick={toggleSidebar}
      >
        <svg
          className="w-8 h-8 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-300 ease-linear md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 z-30 w-72 p-4 mt-8 bg-gray-700 m-8 rounded-lg shadow-md transition-transform duration-300 ease-linear md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-white">Pari Collection</h2>
        </div>
        <div className="px-2">
          <h3 className="text-2xl font-semibold text-white">Dashboard</h3>
        </div>
        <nav className="">
          <ul className='text-white'>
            <li className="mb-2">
              <a href="/dashboard3" className="block p-2 text-white rounded" style={{"textDecoration":"none"}}>Today’s Sales</a>
            </li>
            <li className="mb-2">
              <a href="/dashboard2" className="block p-2 text-white rounded" style={{"textDecoration":"none"}}>Today’s Order</a>
            </li>
            <li className="mb-2">
              <a href="/dashboard1" className="block p-2 text-white rounded" style={{"textDecoration":"none"}}>Today’s Visitors</a>
            </li>
            <li className="mb-2">
              <a href="/dashboard" className="block p-2 text-white rounded" style={{"textDecoration":"none"}}>Today’s Clients</a>
            </li>
          </ul>
        </nav>
        <div className="px-2">
          <h3 className="text-2xl font-semibold text-white">Insert Products</h3>
        </div>
        <nav className="">
          <ul className='text-white'>
            <li className="mb-2">
              <a href="/dashboard5" className="block p-2 text-white rounded" style={{"textDecoration":"none"}}>Add Products</a>
            </li>
            <li className="mb-2">
              <a href="/dashboard4" className="block p-2 text-white rounded" style={{"textDecoration":"none"}}>Products</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
