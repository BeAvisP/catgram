import React, {Fragment} from 'react';
import {Article, ImgWrapper, Img} from './styles';

import {useLocalStorage} from '../../hooks/useLocalStorage';
import {useNearScreen} from '../../hooks/useNearScreen';
import {useMuationToogleLike} from '../../hooks/useMuationToogleLike';

import {FavButton} from '../FavButton/';

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMG}) => {
  const [show, element] = useNearScreen();
  const {mutation, mutationLoading, mutationError} = useMuationToogleLike();
  // Create unique key for localStorage
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: {id},
      },
    });
    setLiked(!liked);
  };

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </Fragment>
      }
    </Article>
  );
};
