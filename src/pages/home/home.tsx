import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import { useScreenSize } from '../../utils/media-query';

export default function Home() {
  const { isXSmall } = useScreenSize();

  const imageStyles: CSSProperties = {
    position: 'relative',
    display: 'block',
    marginRight: '10px',
    width: '150px',
    height: '200px',
    backgroundColor: 'black',
    objectFit: 'cover',
    textAlign: 'center',
  };

  const linkStyles: CSSProperties = {
    color: 'black',
    textDecoration: 'none',
    position: 'relative',
    textAlign: 'left',
  };

  const homeStyles: CSSProperties = {
    display: 'flex',
    flexDirection: isXSmall ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'left',
    marginTop: isXSmall ? '125px' : '50px',
    marginLeft: '50px'
  };

  const altStyle: CSSProperties = {
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '35px',
  }


  return (
    <React.Fragment>
      <div style={homeStyles}>
        <div>
          <Link to='/series' style={linkStyles}>
            <img style={imageStyles} src='/assets/placeholder.png' alt='Series' />
            <p style={altStyle}>Series</p>
            <p>Popular Series</p>
          </Link>

        </div>
        <div>
          <Link to='/movies' style={linkStyles}>
            <img style={imageStyles} src='/assets/placeholder.png' alt='Movies' />
            <p style={altStyle}>Movies</p>
            <p>Popular Movies</p>
          </Link>

        </div>
      </div>

    </React.Fragment>)
}
