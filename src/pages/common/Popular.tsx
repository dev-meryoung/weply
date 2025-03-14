import { useState } from 'react';
import { css } from '@emotion/react';
import Button from '@/components/Button';
import LoadingSpinner from '@/components/LoadingSpinner';
import PlaylistCard from '@/components/PlaylistCard';
import colors from '@/constants/colors';
import { fontSize, fontWeight } from '@/constants/font';
import useGenerateTags from '@/hooks/useGenerateTags ';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import useTagFetch from '@/hooks/useTagFetch';

export const Popular = () => {
  const fixedTag = '#인기 급상승 동영상';
  const [clickedBtn, setClickedBtn] = useState(fixedTag);
  const PAGE_SIZE = 5;
  const tags = useGenerateTags(fixedTag);

  const onButtonClick = (tag: string) => () => {
    setClickedBtn(tag);
  };

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useTagFetch(clickedBtn, PAGE_SIZE);
  const playlists = data?.pages.flatMap((page) => page.playlistsData) || [];

  const infiniteScrollRef = useInfiniteScroll(
    async (entry, observer) => {
      observer.unobserve(entry.target);
      if (hasNextPage && !isFetchingNextPage) {
        await fetchNextPage();
      }
    },
    {
      root: null,
      rootMargin: '0px 0px -20px 0px',
      threshold: 0.5,
    }
  );

  return (
    <div css={contentContainerStyle}>
      <div css={headerContainerStyle}>
        <div css={tagContainerStyle}>
          {tags.map((tag) => (
            <Button
              key={tag}
              label={`${tag}`}
              onClick={onButtonClick(tag)}
              size='lg'
              color={clickedBtn === tag ? 'primary' : 'lightGray'}
            />
          ))}
        </div>
        <div css={titleContainerStyle}>{clickedBtn}</div>
      </div>
      <div css={playlistContainerStyle}>
        {playlists.map((playlistItem) => (
          <PlaylistCard
            key={playlistItem.playlistId}
            playlistItem={playlistItem}
            size='large'
          />
        ))}
        <div css={loadingSpinnerStyle}>
          {isFetching && playlists.length >= PAGE_SIZE && <LoadingSpinner />}
        </div>
        <div
          ref={infiniteScrollRef}
          style={{ minHeight: '72px', width: '100%' }}
        ></div>
      </div>
    </div>
  );
};

const headerHeight = '157px';

const contentContainerStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const headerContainerStyle = css`
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: fixed;
  z-index: 10;
  background: ${colors.white};
  width: 430px;
  gap: 20px;
`;

const tagContainerStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;

const titleContainerStyle = css`
  align-items: center;
  font-size: ${fontSize.xxl};
  font-weight: ${fontWeight.medium};
`;

const playlistContainerStyle = css`
  padding: calc(${headerHeight} + 20px) 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const loadingSpinnerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Popular;
