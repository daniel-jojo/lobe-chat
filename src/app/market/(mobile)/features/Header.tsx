import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';
import JoJoLogo from 'src/components/JoJoVentures/Logo';

import ShareAgentButton from '../../features/ShareAgentButton';

const Header = memo(() => {
  return (
    <MobileNavBar
      center={<JoJoLogo height="36" width="36" />}
      right={<ShareAgentButton mobile />}
    />
  );
});

export default Header;
