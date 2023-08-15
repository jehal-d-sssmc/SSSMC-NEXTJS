import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import $ from 'jquery';
import '../styles/globals.css';

class MyApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jquery: false,
    };
  }
  async componentDidMount() {
    this.setState(
      {
        jquery: require('jquery'),
      },
      () => {
        const $ = this.state.jquery;
        $(document).ready(function () {
          $('.js-menu-icon').on('click', function () {
            $(this).toggleClass('fa-times fa-bars');
            $('.menu .container').removeClass('container--is-visible');
            $('.menu li').removeClass('is-selected');
            $('.js-navbar').toggleClass('navbar--is-visible');
          });

          $('.menu li').on('click', function (e) {
            e.preventDefault();
            var $this = $(this);
            $this.toggleClass('is-selected');

            var $currentContainer = $(this).find('.container');
            $currentContainer.toggleClass('container--is-visible');

            $('.menu .container')
              .not($currentContainer)
              .removeClass('container--is-visible');
            $('.menu li').not($this).removeClass('is-selected');
          });
        });
      }
    );
  }

  render() {
    const Component = this.props.Component;
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
        <Component {...this.props} {...this.state} />
      </>
    );
  }
}

export default MyApp;
