/* eslint-disable react/prop-types */
import React, {Fragment} from 'react';
import {ListOfPhotoCards} from '../components/ListOfPhotoCards';
import {ListOfCategories} from '../components/ListOfCategories';

export const Home = (props) => {
  const {
    match: {
      params: {id},
    },
  } = props;
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  );
};
