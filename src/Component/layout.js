import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './Header';
import CartTab from './CartTab';
import { useSelector } from 'react-redux';

function Layout() {  // Capitalize the component name
  const statusTabCart = useSelector(store => store.cart.statusTab);

  return (
    <div className='bg-zinc-300'>
      <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500 ${statusTabCart === false ? "" : "-translate-x-56"}`}> 
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
}

export default Layout;
