import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../client/components/Header';
import SwiperComp from '../client/components/SwiperComp';
import Shorts from '../client/components/Shorts';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <SwiperComp />
        </div>
        <div className="p-3">
          <h3 className="section-title">Shorts</h3>
          <div className="p-2"></div>
          <Shorts />
        </div>
      </>
    );
  }
}
