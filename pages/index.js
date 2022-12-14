import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Trending from "../components/Trending";
import Sport from "../components/Sport";
import Monde from "../components/Monde";
import LifeStyle from "../components/LifeStyle";
import Footer from "../components/Footer";
import Videos from "../components/Videos";
import News from "../components/News";
import Widgetfollows from "../components/Widgetfollows"
import Widgetweather from "../components/Widgetweather";
//import Widgettabulations from "../components/Widgettabulations";
import Technologie from "../components/Technology";
import WidgetNewsletter from "../components/WidgetNewsletter";
import WidgetMostV from "../components/WidgetMostV";
import SlideVideo from "../components/SlideVideo";
import Widgetcategories from "../components/Widgetcategories";
import Image from 'next/image'
import Essai from "../components/essai";

export default function Index() {


  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>My App Jannah</title>
        <link
          rel="stylesheet"
          id="taqyeem-buttons-style-css"
          href="css/style.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tie-css-base-css"
          href="css/base.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tie-css-styles-css"
          href="css/style.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tie-css-widgets-css"
          href="css/widgets.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tie-css-helpers-css"
          href="fonts/helpers.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tie-fontawesome5-css"
          href="fonts/fontawesome.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tie-css-ilightbox-css"
          href="css/skin.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tie-css-shortcodes-css"
          href="css/shortcodes.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="taqyeem-styles-css"
          href="css/taqyeem.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="dashicons-css"
          href="fonts/dashicons.css"
          type="text/css"
          media="all"
        />
      
           
         
       
        <meta name="description" content="  version clean" />
        <meta name="theme-color" content="#0088ff" />
        <link rel="stylesheet" href="css/typo.css" media="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        
      </Head>
      
      <div className="background-overlay">
        <div id="tie-container" className="site tie-container">
          <div id="tie-wrapper">
            {/* BK-bloc-start-header*/}

            <Navbar />
            {/* BK-end-bloc-header*/}
            {/* BK-bloc-start-slide*/}
            <Slide />
            {/* BK-bloc-end-slide */}
            <div
              id="tiepost-1020-section-749"
              className="section-wrapper container normal-width without-background"
            >
              <div
                className="section-item sidebar-right has-sidebar"
                style={{}}
              >
                <div className="container-normal">
                  <div className="tie-row main-content-row">
                    <div
                      className="main-content tie-col-md-8 tie-col-xs-12"
                      role="main"
                    >
                      {/* BK-bloc-start-Trending News */}
                      <Trending />
                      {/* .mag-box /*
                      {/* BK-bloc-start-sports */}
                      <Sport />
                      {/* .mag-box /*/}
                      {/* BK-bloc-start-Racing */}
                      <div
                        id="tie-block_1810"
                        className="mag-box tie-col-sm-6 half-box has-first-big-post has-custom-color first-half-box"
                        data-current={1}
                      >
                        <Monde/>
                        {/* .container-wrapper /*/}
                      </div>
                      {/* .mag-box /*/}
                      {/* BK-end-bloc-start-Racing */}

                      {/* BK-bloc-start-LifeStyle */}
                      <div
                        id="tie-block_304"
                        className="mag-box tie-col-sm-6 half-box has-first-big-post has-custom-color second-half-box"
                        data-current={1}
                      >
                        <LifeStyle />
                        {/* .container-wrapper /*/}
                      </div>
                      {/* .mag-box /*/}
                      {/* BK-end-bloc-start-LifeStyle */}

                      <div className="clearfix half-box-clearfix" />
                    </div>
                    {/* .main-content /*/}
                    {/* BK-bloc-start-aside */}
                    <aside
                      className="sidebar tie-col-md-4 tie-col-xs-12 normal-side is-sticky"
                      aria-label="Sidebar Principale"
                      style={{
                        position: "relative",
                        overflow: "visible",
                        boxSizing: "border-box",
                        minHeight: 1,
                      }}
                    >
                      <div
                        className="theiaStickySidebar"
                        style={{
                          paddingTop: 0,
                          paddingBottom: 1,
                          position: "static",
                          transform: "none",
                        }}
                      > 
                      {/* BK-end-bloc-start-followus */}
                      
                       <Widgetfollows/>
                        {/* BK-end-bloc-end-followus */}
                        {/* BK-bloc-start-widget*/}
                        {/* .widget /*/}
                         {/* BK-bloc-start-widgetweather*/}
                      <Widgetweather/>
                         {/* BK-bloc-end-widgetweather*/}                     
                        {/* .widget /*/}
                        {/* BK-bloc-start-widget-recents*/}
                        {/* <Widgettabulations/> */}
                        <Essai/>
                        {/* BK-bloc-end-widget-recents*/}
                        {/* .container-wrapper /*/}
                      </div>
                      {/* .theiaStickySidebar /*/}
                    </aside>
                     {/* BK-bloc-end-aside */}
                    {/* .sidebar /*/}
                  </div>
                  {/* .main-content-row */}
                </div>
                {/* .container /*/}
              </div>
              {/* .section-item /*/}
            </div>
            {/* .tiepost-1020-section-749 /*/}
            {/* BK-bloc-start-slideVideo */}
          <SlideVideo/>
            {/* .tiepost-1020-section-8509 /*/}
            {/* BK-bloc-end-slideVideo */}

            <div
              id="tiepost-1020-section-6559"
              className="section-wrapper container normal-width without-background"
            >
              <div
                className="section-item sidebar-right has-sidebar"
                style={{}}
              >
                <div className="container-normal">
                  <div className="tie-row main-content-row">
                    <div
                      className="main-content tie-col-md-8 tie-col-xs-12"
                      role="main"
                    >
                      
            {/* BK-bloc-start-Technology */}
                      <Technologie/>
                      {/* BK-bloc-end-Technology */}
                      {/* .mag-box /*/}

                         {/* BK-bloc-vid??o*/}
                      <Videos />
                      {/* BK-end-bloc-vid??o*/}
                      {/* .mag-box /*/}
                      {/*
                    
                  */}
                      {/* BK-bannere-publicitaire*/}
                      <div
                        id="tie-block_2223"
                        className="mag-box stream-item-mag stream-item content-only"
                      >
                        <div className="container-wrapper">
                          <a href="#" title="" target="_blank">
                            <Image                              
                              src="/images/1.jpg"
                              alt=""
                              width={728}
                              height={90}
                            />
                          </a>
                        </div>
                        {/* .container-wrapper /*/}
                      </div>
                      {/* .mag-box /*/}
                      {/* BK-end-bannere-publicitaire*/}
                      {/* BK-section- what's new*/}
                     <News/>
                      {/* BK-end-section- what's new*/}
                      {/* .mag-box /*/}
                    </div>

                    {/* .main-content /*/}
                    <aside
                      className="sidebar tie-col-md-4 tie-col-xs-12 normal-side is-sticky"
                      aria-label="Sidebar Principale"
                      style={{
                        position: "relative",
                        overflow: "visible",
                        boxSizing: "border-box",
                        minHeight: 1,
                      }}
                    >
                      <div
                        className="theiaStickySidebar"
                        style={{
                          paddingTop: 0,
                          paddingBottom: 1,
                          position: "static",
                          transform: "none",
                        }}
                      >
                        {/* bk-widget-mostView /*/}
                       <WidgetMostV/>
                        {/* .widget /*/}
                      </div>
                      {/* bk-widget newsletter /*/}
                    <WidgetNewsletter/>
                      {/* bk-end-widget newsletter /*/}
                      {/* .widget /*/}
                      {/* bk-widget-categorie /*/}
                     <Widgetcategories/>
                      {/* bk-end-widget-categorie /*/}
                      {/* .widget /*/}
                    </aside>
                  </div>
                  {/* .theiaStickySidebar /*/}
                  {/* .sidebar /*/}
                </div>
                {/* .main-content-row */}
              </div>
              {/* .container /*/}
            </div>
            
           
            {/* .section-item /*/}
          </div>
           
          {/* .tiepost-1020-section-6559 /*/}
          {/* BK-footer */}
          <Footer />
          {/* BK-end-footer */}
          {/* #footer /*/}
          {/* BK-go-to-top-button */}
          <a
            id="go-to-top"
            className="go-to-top-button show-top-button"
            href="#"
          >
            <span className="tie-icon-angle-up" />
            <span className="screen-reader-text">
              Bouton retour en haut de la page
            </span>
          </a>
          {/* BK-end-go-to-top-button */}
        </div>
        {/* #tie-wrapper /*/}
      </div>
      {/* <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script> */}
    </>
  );
}
