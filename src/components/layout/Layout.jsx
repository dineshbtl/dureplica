import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

export default function Layout() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-wrapper">
        <TopNav />
        <main className="content-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
