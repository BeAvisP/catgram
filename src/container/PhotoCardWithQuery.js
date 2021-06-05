import React from 'react';
import {PhotoCard} from '../components/PhotoCard';
import {useQuery, gql} from '@apollo/client';
import {Loader} from '../components/Loader';

const query = gql`
  query getSinglePhoto($id:ID!) {
    photo(id:$id) {
        id
        categoryId
        src
        likes
        userId
        liked
    }
  }
`;

export const PhotoCardWithQuery = ({id}) => {
  const {loading, error, data} = useQuery(query, {
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
