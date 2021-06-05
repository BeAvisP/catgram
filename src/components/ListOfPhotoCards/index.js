import React from 'react';
import {PhotoCard} from '../PhotoCard';
// HOC: High Order Component
import {withPhotos} from '../../hoc/withPhotos';
import {useQuery} from '@apollo/client';
import {Loader} from '../Loader';

export const ListOfPhotoCards = ({categoryId}) => {
  const {loading, error, data} = useQuery(withPhotos, {
    variables: {categoryId},
  });

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
