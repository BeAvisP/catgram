import {gql} from '@apollo/client';

export const singlePhoto = gql`
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
