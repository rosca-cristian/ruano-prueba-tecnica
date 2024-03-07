import React from 'react';
import './movies.scss';
import { SeriesMovies, FilterYear } from '../../components';
import { RecoilRoot } from 'recoil';

export default function MoviesPage() {

  return (
    <React.Fragment>
      <RecoilRoot>
        <FilterYear />
        <SeriesMovies type={'movie'} />
      </RecoilRoot>
    </React.Fragment>);
}



