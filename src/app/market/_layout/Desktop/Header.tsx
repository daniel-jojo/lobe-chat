import { ChatHeader, Logo } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import JoJoLogo from 'src/components/JoJoVentures/Logo';

import ShareAgentButton from '../../features/ShareAgentButton';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const Header = memo(() => {
  const { styles } = useStyles();

  return (
    <ChatHeader
      left={
        <Link aria-label={'home'} href={'/'}>
          <Flexbox align={'center'} distribution={'space-between'} gap={8} horizontal>
            <JoJoLogo height="64" width="64" />
            <span className={styles.logo}>X </span>
            <Logo className={styles.logo} extra={'Discover'} size={36} type={'text'} />
          </Flexbox>
          {/* <JoJoLogo width="64" height="64" /> X
          <Logo className={styles.logo} extra={'Discover'} size={36} type={'text'} /> */}
        </Link>
      }
      right={<ShareAgentButton />}
    />
  );
});

export default Header;
