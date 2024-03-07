import { atom } from 'recoil';

export const selectedYearState = atom({
  key: 'selectedYearState',
  default: 2010,
});

export const seriesOrMoviesState = atom({
  key: 'seriesOrMoviesState',
  default: [],
});

export const pageSizeState = atom({
  key: 'pageSizeState',
  default: 20,
});

export const loadingState = atom({
  key: 'loadingState',
  default: true
});

export const openPopupIdState = atom({
  key: 'openPopupIdState',
  default: ''
});

export const currentPageState = atom({
  key: 'currentPageState',
  default: 1
});