import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface Props {
  isLiked: boolean;
  onLikeHandler: () => void;
}

const Like = ({ isLiked, onLikeHandler }: Props) => {
  return (
    <>
      {isLiked ? (
        <AiFillHeart color="#ff6b81" size={20} onClick={onLikeHandler} />
      ) : (
        <AiOutlineHeart color="#ff6b81" size={20} onClick={onLikeHandler} />
      )}
    </>
  );
};

export default Like;
