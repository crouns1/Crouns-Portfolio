import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="bg-gray-900 text-white p-4">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <p className="text-sm text-gray-400">Full-Stack Developer</p>
      </header>

      <main className="flex-1 p-4">{children}</main>

      <footer className="bg-gray-900 text-white p-4 text-center text-sm">
        © 2026 Your Name. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
