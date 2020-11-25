import React, { memo, useCallback } from 'react';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import { AlbumWrapper } from './style';

export default memo(function HYNewAlbum() {
  const handleMore = useCallback(() => {
    console.log('点击新碟上架更多!');
  }, [])
  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" onMore={handleMore} />
    </AlbumWrapper>
  )
})
