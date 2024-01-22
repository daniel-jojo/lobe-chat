import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · JoJo x LobeChat` : 'JoJo x LobeChat';
  }, [title]);

  return null;
});

export default PageTitle;
