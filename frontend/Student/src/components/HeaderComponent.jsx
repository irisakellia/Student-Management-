import React from 'react';

const HeaderComponent = () => {
  return (
    <header className="bg-blue-950 text-white shadow-md w-full fixed top-0 right-0 left-0">
      <nav className="container  py-3 flex justify-between items-center">
        <div className="text-2xl font-bold ml-10">Student Management System</div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
