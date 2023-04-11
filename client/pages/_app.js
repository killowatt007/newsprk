import React from "react";
import {ToastContainer} from "react-toastify";
import ScrollTopButton from "../components/ScrollTopButton";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import '../styles/master.scss'
import 'font-awesome/css/font-awesome.min.css';
import 'swiper/swiper.scss'
import 'react-modal-video/scss/modal-video.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position="top-center"/>
      <ScrollTopButton/>
    </>
  )
}