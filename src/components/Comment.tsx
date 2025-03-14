import { css } from '@emotion/react';
import KebabButton from '@/components/KebabButton';
import { fontSize, fontWeight } from '@/constants/font';
import useModalStore from '@/stores/useModalStore';

export interface CommentWithProfileProps {
  imgUrl: string;
  userName: string;
  content: string;
  showKebabMenu?: boolean;
  isEdited?: boolean;
  docId?: string;
  onDelete?: (commentId: string) => void;
  onClick?: () => void;
}

const Comment: React.FC<CommentWithProfileProps> = ({
  imgUrl,
  userName,
  content,
  showKebabMenu = false,
  docId,
  onDelete = () => {},
  onClick = () => {},
}) => {
  const { openModal } = useModalStore();

  const onDeleteBtnClick = () => {
    openModal({
      type: 'delete',
      title: '댓글 삭제',
      content: `댓글을 삭제하시겠습니까?`,
      onAction: () => {
        if (docId) onDelete(docId);
      },
    });
  };

  const menuItems = [
    {
      label: '삭제',
      onClick: onDeleteBtnClick,
    },
  ];

  return (
    <div css={commentStyles}>
      <img
        src={imgUrl}
        alt='프로필이미지'
        onClick={onClick}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = '/images/profile_default.png';
        }}
      />
      <div css={contentStyles}>
        <span className='userName' onClick={onClick}>
          {userName}
        </span>
        <span className='content'>{content}</span>
      </div>
      <div css={emptyBoxStyle}></div>
      {showKebabMenu && <KebabButton menuItems={menuItems} />}
    </div>
  );
};

const commentStyles = css`
  display: flex;
  gap: 10px;
  align-items: flex-start;

  img {
    min-width: 36px;
    max-width: 36px;
    min-height: 36px;
    max-height: 36px;
    border-radius: 50%;
    object-fit: cover;
    :hover {
      cursor: pointer;
    }
  }
`;

const contentStyles = css`
  gap: 6px;
  display: flex;
  flex-direction: column;
  font-size: ${fontSize.sm};

  .userName {
    cursor: pointer;
    font-weight: ${fontWeight.semiBold};
  }

  .content {
    line-height: 19px;
  }
`;

const emptyBoxStyle = css`
  flex-grow: 1;
`;

export default Comment;
