import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';
import Logo from 'src/components/JoJoVentures/Logo';

import { genSize, useStyles } from './style';

// const LogoThree = dynamic(() => import('@lobehub/ui/es/LogoThree'));
// const LogoSpline = dynamic(() => import('@lobehub/ui/es/LogoThree/LogoSpline'));

const Hero = memo<{ mobile?: boolean; width: number }>(({ width, mobile }) => {
  const size: any = {
    base: genSize(width / 3.5, 240),
    desc: genSize(width / 50, 14),
    logo: genSize(width / 2.5, 180),
    title: genSize(width / 20, 32),
  };

  size.marginTop = mobile ? -size.logo / 9 : -size.logo / 3;
  size.marginBottom = mobile ? -size.logo / 9 : -size.logo / 4;

  const { styles } = useStyles(size.base);

  const { t } = useTranslation('welcome');

  return (
    <>
      <Flexbox
        style={{
          height: size.logo,
          marginBottom: size.marginBottom,
          marginTop: size.marginTop,
          position: 'relative',
        }}
      >
        {mobile ? (
          <Logo height={size.logo} width={size.logo} />
        ) : (
          <Logo height={'100%'} width={'100%'} />
        )}
      </Flexbox>
      <div className={styles.title} style={{ fontSize: size.title }}>
        <strong style={mobile ? { fontSize: '1.2em' } : {}}>JoJo x LobeChat</strong>
        {/* {mobile ? <br /> : ' '} */}
        <br />
      </div>
      <div className={styles.desc} style={{ fontSize: size.desc }}>
        {t('slogan.title')}
        <br />
        {t('slogan.desc1')}
      </div>
    </>
  );
});

export default Hero;
