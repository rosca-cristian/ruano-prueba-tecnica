import React, { CSSProperties } from 'react';
import './Footer.scss';
import { useScreenSize } from '../../utils/media-query';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { isXSmall } = useScreenSize();
  const footerStyles: CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1E1E1E',
    color: '#979B9E',
    padding: '50px 50px',
  };

  const linksStyles: CSSProperties = {
    display: 'flex',
    flexDirection: isXSmall ? 'column' : 'row',
    alignItems: 'center',
    marginBottom: '15px',
  };

  const aTagStyles: CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    borderLeft: isXSmall ? '' : '2px solid #c4c4c4',
    padding: isXSmall ? '' : '0 15px',
  };

  const imgStyles: CSSProperties = {
    width: '30px',
    height: '30px',
    marginRight: '18px',
  };

  const storeStyles: CSSProperties = {
    width: '120px',
    height: '35px',
    marginRight: '18px',
  };

  const socialMediaStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: isXSmall ? 'space-evenly' : 'space-between',
    marginTop: '30px',
  };

  return <footer style={footerStyles} >
    <div style={linksStyles}>
      <Link to='/home' style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>Home</Link>
      <a href='/termsandconditions' style={aTagStyles}>Terms and Conditions</a>
      <a href='/privacypolicy' style={aTagStyles}>Privacy Policy</a>
      <a href='/collectionstatement' style={aTagStyles}>Collection Statement</a>
      <a href='/help' style={aTagStyles}>Help</a>
      <a href='/manageaccount' style={aTagStyles}>Manage Account</a>
    </div>
    <p style={{ textAlign: isXSmall ? 'center' : 'left' }}>Copyright © 2016 DEMO Streaming. All rights reserved.</p>
    <div style={socialMediaStyles}>
      <div style={{ textAlign: isXSmall ? 'center' : 'left' }}>
        <a href='https://www.facebook.com'><img src='/assets/social/facebook-white.svg' alt='facebook' style={imgStyles} /></a>
        <a href='https://www.twitter.com'><img src='/assets/social/twitter-white.svg' alt='twitter' style={imgStyles} /></a>
        <a href='https://www.instagram.com'><img src='/assets/social/instagram-white.svg' alt='instagram' style={imgStyles} /></a>
      </div>
      <div style={{ textAlign: isXSmall ? 'center' : 'left' }}>
        <a href='https://www.apple.com'><img src='/assets/store/app-store.svg' alt='apple' style={storeStyles} /></a>
        <a href='https://play.google.com'><img src='/assets/store/play-store.svg' alt='google play' style={storeStyles} /></a>
        <a href='https://www.microsoft.com'><img src='/assets/store/windows-store.svg' alt='microsoft' style={storeStyles} /></a>
      </div>
    </div>
  </footer>;
}
