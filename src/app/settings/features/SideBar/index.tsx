import { DraggablePanelBody, Logo } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import JoJoLogo from 'src/components/JoJoVentures/Logo';

import FolderPanel from '@/features/FolderPanel';

import UpgradeAlert from '../UpgradeAlert';
import List from './List';

const useStyles = createStyles(({ stylish, token, css }) => ({
  body: stylish.noScrollbar,
  logo: css`
    fill: ${token.colorText};
  `,
  top: css`
    position: sticky;
    top: 0;
  `,
}));

const SideBar = memo(() => {
  const { styles } = useStyles();

  return (
    <FolderPanel>
      <DraggablePanelBody className={styles.body} style={{ padding: 0 }}>
        <Flexbox className={styles.top} padding={16}>
          <Flexbox align={'center'} distribution={'space-between'} horizontal>
            <JoJoLogo height="64" width="64" /> X
            <Logo className={styles.logo} extra={'Settings'} size={36} type={'text'} />
          </Flexbox>
        </Flexbox>
        <Flexbox gap={2} style={{ paddingInline: 8 }}>
          <UpgradeAlert />
          <List />
        </Flexbox>
      </DraggablePanelBody>
    </FolderPanel>
  );
});

export default SideBar;
