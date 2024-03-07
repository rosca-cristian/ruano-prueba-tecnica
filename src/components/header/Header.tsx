import React, { CSSProperties } from 'react';
import './Header.scss';
import type { HeaderProps } from '../../types';
import { Button } from 'devextreme-react/button';
import { useScreenSize } from '../../utils/media-query';

export default function Header({ title }: HeaderProps) {
  const { isXSmall } = useScreenSize();

  const styleTopMenuBar: CSSProperties = {
    width: '100%',
    position: 'relative',
    color: 'white',
    display: 'flex',
    flexDirection: isXSmall ? 'column' : 'row',
    padding: '5px 50px',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgb(1,143,255)',
    backgroundImage: 'linear-gradient(0deg, rgba(1,143,255,1) 50%, rgba(0,106,255,1) 100%)',
  };

  const styleLowMenuBar: CSSProperties = {
    width: '100%',
    height: 'auto',
    padding: '5px 50px',
    position: 'relative',
    color: 'white',
    backgroundColor: 'grey',
    boxShadow: '0 - 6px 10px 5px rgba(0,0,0,0.5)'
  };

  const buttonStyles: CSSProperties = {
    color: 'white',
    backgroundColor: '#3C3C3C',
  };

  return (
    <div style={{
      width: '100%',
      height: '100px',
      textAlign: 'left',
    }} >
      <div style={styleTopMenuBar}>
        <div style={{ fontSize: '40px', textAlign: isXSmall ? 'center' : 'left', padding: '5px 0' }}>DEMO Streaming</div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '5px' }}>
          <div style={{ marginRight: isXSmall ? '10px' : '40px' }}>Log in</div>
          <Button style={buttonStyles} text='Start free trial' />
        </div>
      </div>
      <div style={styleLowMenuBar}>
        <div style={{ fontSize: '25px', textAlign: isXSmall ? 'center' : 'left', padding: '5px 0' }}>Popular {title === 'home' ? 'Titles' : title}</div>
      </div>
    </div >
  )
}