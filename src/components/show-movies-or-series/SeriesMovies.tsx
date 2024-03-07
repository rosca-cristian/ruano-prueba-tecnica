import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil';
import React, { CSSProperties, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useScreenSize } from '../../utils/media-query';
import './SeriesMovies.scss';
import {
  Popup
} from 'devextreme-react/popup';
import { selectedYearState, pageSizeState, seriesOrMoviesState, loadingState, openPopupIdState, currentPageState } from '../../contexts/recoil';

interface SeriesMoviesProps {
  type: string;
}

interface MovieOrSerie {
  title: string;
  description: string;
  programType: string;
  images: {
    'Poster Art': {
      url: string;
      width: number;
      height: number;
    }
  },
  releaseYear: number;
}

export default function SeriesMoviesComponents({ type }: SeriesMoviesProps) {
  const { isXSmall } = useScreenSize();
  const imageStyles: CSSProperties = {
    position: 'relative',
    display: 'block',
    marginRight: '10px',
    width: '150px',
  };

  const homeStyles: CSSProperties = {
    display: 'flex',
    flexDirection: isXSmall ? 'row' : 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'left',
    marginTop: '50px',
    marginLeft: isXSmall ? '25px' : '50px'
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useRecoilState(loadingState);
  const [myData, setMyData] = useRecoilState(seriesOrMoviesState);
  const selectedYear = useRecoilValue(selectedYearState);
  const [openPopupId, setOpenPopupId] = useRecoilState(openPopupIdState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [pageSize, setPageSize] = useRecoilState(pageSizeState);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  async function fetchData() {
    try {
      const response = await fetch('../../../sample.json');
      const data = await response.json();
      setMyData(data.entries);
      const apiResponseTime = Math.random() * 5000;
      setTimeout(() => {
        setIsLoading(false);
      }, apiResponseTime);
    } catch (error) {
      setIsLoading(true);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const pageParam = searchParams.get('page');
    if (pageParam) {
      setCurrentPage(parseInt(pageParam, 10));
    }
  }, [searchParams, setCurrentPage]);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', currentPage.toString());
    setSearchParams(newSearchParams);
  }, [currentPage, setSearchParams]);

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  function togglePopup(movieId: string) {
    setOpenPopupId(movieId);
  };

  const filteredData = myData
    .filter((item: MovieOrSerie) => item.programType === type && item.releaseYear >= selectedYear)
    .sort((a: MovieOrSerie, b: MovieOrSerie) => a.title.localeCompare(b.title));

  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <RecoilRoot>
      <div style={homeStyles}>
        {
          isLoading ? (
            <div>Loading...</div>
          ) : (
            paginatedData
              .map((item: MovieOrSerie) => {
                return (
                  <>
                    <Popup
                      id={item.title}
                      visible={openPopupId === item.title}
                      onHiding={() => togglePopup('')}
                      hideOnOutsideClick={true}
                      dragEnabled={true}
                      width={500}
                      height={600}
                    >
                      <div>
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        <p>{item.releaseYear}</p>
                        <img style={{ width: '250px', height: '400px' }} src={item.images['Poster Art'].url} alt={item.title} />
                      </div>
                    </Popup>
                    <div onClick={() => togglePopup(item.title)} key={item.title}>
                      <img className="result-image" style={imageStyles} src={item.images['Poster Art'].url} alt='Movies' />
                      <p style={{ wordBreak: 'break-word', width: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>{item.title}</p>
                    </div>
                  </>
                )
              })
          )
        }
      </div>
      <div style={{ marginLeft: '50px', marginTop: '10px', marginBottom: isXSmall ? '10px' : '' }}>
        <button style={{ marginRight: '20px' }} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span style={{ marginRight: '20px' }}>{currentPage}</span>
        <button style={{ marginRight: '20px' }} onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= filteredData.length}>Next</button>
        <select id="year" value={pageSize} onChange={(e) => setPageSize(parseInt(e.target.value, 10))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
    </RecoilRoot >
  );
}
