import React from 'react';
import {PhotoCard} from '../components/PhotoCard';
import {singlePhoto} from '../hoc/singlePhoto';
import {useQuery} from '@apollo/client';
import {Loader} from '../components/Loader';

export const PhotoCardWithQuery = ({id}) => {
  const {loading, error, data} = useQuery(singlePhoto, {
    variables: {
      id: id,
    },
  });
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <Loader />;
  }

  return (
    <PhotoCard {...data.photo} />
  );
};
