import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Article, ImgWrapper, Img, Button} from './styles';
import {MdFavoriteBorder} from 'react-icons/md';

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMG}) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(function() {
    // To verify if the element is in the viewport and act as a LazyLoad
    const observer = new window.IntersectionObserver(function(entries) {
      const {isIntersecting} = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(element.current);
  }, [element]);

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px'/> {likes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  );
};
