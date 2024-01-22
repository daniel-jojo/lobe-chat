import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';
import JoJoLogo from 'src/components/JoJoVentures/Logo';

const Header = memo(() => {
  return <MobileNavBar center={<JoJoLogo height="36" width="36" />} />;
});

export default Header;
