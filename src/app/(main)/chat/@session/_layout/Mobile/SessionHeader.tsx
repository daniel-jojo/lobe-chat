'use client';

import { ActionIcon, MobileNavBar } from '@lobehub/ui';
import { LobeChat } from '@lobehub/ui/brand';
import { MessageSquarePlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import JoJoLogo from 'src/components/JoJoVentures/Logo';

import { MOBILE_HEADER_ICON_SIZE } from '@/const/layoutTokens';
import SyncStatusInspector from '@/features/SyncStatusInspector';
import UserAvatar from '@/features/User/UserAvatar';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';
import { useSessionStore } from '@/store/session';
import { mobileHeaderSticky } from '@/styles/mobileHeader';

const Header = memo(() => {
  const [createSession] = useSessionStore((s) => [s.createSession]);
  const router = useRouter();
  const { enableWebrtc, showCreateSession } = useServerConfigStore(featureFlagsSelectors);

  return (
    <MobileNavBar
      center={<JoJoLogo height="36" width="36" />}
      left={
        <Flexbox align={'center'} gap={8} horizontal style={{ marginLeft: 8 }}>
          <UserAvatar onClick={() => router.push('/me')} size={32} />
          <LobeChat type={'text'} />
          {enableWebrtc && <SyncStatusInspector placement={'bottom'} />}
        </Flexbox>
      }
      right={
        showCreateSession && (
          <ActionIcon
            icon={MessageSquarePlus}
            onClick={() => createSession()}
            size={MOBILE_HEADER_ICON_SIZE}
          />
        )
      }
      style={mobileHeaderSticky}
    />
  );
});

export default Header;