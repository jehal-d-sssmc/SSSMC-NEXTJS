import React from 'react';
import FooterMenu from './FooterMenu';

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <div>
          <footer className="topnav">
            <div className="logo">
              <img src="https://www.sssmediacentre.org/755f75139b00a808ae072efc6cdd7ae8.png" />{' '}
              <span>SRI SATHYA SAI</span>
            </div>

            <div style={{ flexGrow: '1' }}>
              <FooterMenu />
            </div>
          </footer>
        </div>
      </>
    );
  }
}
