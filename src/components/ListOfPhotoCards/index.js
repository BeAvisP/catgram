import React from 'react';
import {PhotoCard} from '../PhotoCard';
import {useQuery, gql} from '@apollo/client';
import {Loader} from '../Loader';

const whitPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCards = () => {
  const {loading, error, data} = useQuery(whitPhotos);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <Loader />;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
