import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../client/components/Common/Header';
import SwiperComp from '../client/components/Home/SwiperComp';
import Shorts from '../client/components/Home/Shorts';
import Watch from '../client/components/Home/Watch';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="p-2"></div>
        <div style={{ margin: '0 15px' }}>
          <SwiperComp />
        </div>
        <div className="p-3">
          <h3 className="section-title">Shorts</h3>
          <div className="p-2"></div>
          <Shorts />
        </div>

        <div className="p-3">
          <h3 className="section-title">Watch</h3>
          <div className="p-2"></div>
          <Watch />
        </div>
      </>
    );
  }
}
