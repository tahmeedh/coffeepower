import React, { useEffect, useState } from 'react';
import DesktopHeader from '../DesktopHeader/DesktopHeader';
import MobileHeader from '../MobileHeader/MobileHeader';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1075);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1075);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;