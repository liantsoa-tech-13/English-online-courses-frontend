import React from 'react';
import VisitorLinks from './VisitorLinks';

const Navbar: React.FC = () => {
  return (
    <div>
      {/*   /*
    {user?.role === 'ADMIN' ? <AdminLinks /> : <UserLinks />}
  {!user && <VisitorLinks />}
    */}
     <VisitorLinks />
    </div>
  );
};

export default Navbar;