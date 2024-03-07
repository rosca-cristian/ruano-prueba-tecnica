import React from 'react';
import './series.scss';
import { SeriesMovies, FilterYear } from '../../components';
import { RecoilRoot } from 'recoil';

export default function SeriesPage() {

  return (
    <React.Fragment>
      <RecoilRoot>
        <FilterYear />
        <SeriesMovies type={'series'} />
      </RecoilRoot>
    </React.Fragment>);
}


