import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getPosts(after, before, last, first) {
  const res = await fetch("http://localhost/jannah/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        posts (${last ? `,last:${last}` : "last: null"} , ${
        first ? `,first:${first}` : "first: null"
      }, ${after ? `,after:"${after}"` : ""} ${
        before ? `,before:"${before}"` : ""
      } ,where: {categoryId: 20}){
          nodes {
            slug
            commentCount
            excerpt
            date
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
              }
            }
            categories {
              nodes {
                categoryId
                name
              }
            }
          }
          pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
             
              `,
    }),
  });

  const json = await res.json();
  console.log(json);
  return json.data.posts;
}
const SlideVideo = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [after, setAfter] = useState();
  const [before, setBefore] = useState();
  const [first, setFirst] = useState(6);
  const [last, setLast] = useState();
  const moment = require("moment");

  useEffect(() => {
    getPosts(after, before, last, first).then((data) => setPosts(data));
  }, [after, before, last, first]);
  return (
    <div
      id="tiepost-1020-section-8509"
      className="section-wrapper container-full without-background"
    >
      <div className="section-item full-width" style={{}}>
        <div className="container">
          <div className="tie-row main-content-row">
            <div className="main-content tie-col-md-12">
              <section
                id="tie-block_3032"
                className="slider-area mag-box media-overlay"
              >
                <div className="slider-area-inner">
                  <div
                    id="tie-main-slider-9-block_3032"
                    className="tie-main-slider main-slider grid-2-big boxed-slider grid-slider-wrapper tie-slick-slider-wrapper"
                    data-slider-id={9}
                    data-speed={3000}
                  >
                    <div className="main-slider-inner">
                      <div className="containerblock_3032">
                        <div className="tie-slick-slider slick-initialized slick-slider">
                          <ul className="tie-slider-nav">
                            <li
                              onClick={() => {
                                setBefore(posts?.pageInfo?.startCursor);
                                setLast(2);
                                setAfter("");
                                setFirst(null);
                              }}
                              style={
                                posts?.pageInfo?.hasPreviousPage !== true
                                  ? {
                                      pointerEvents: "none",
                                      opacity: "0.3",
                                    }
                                  : {}
                              }
                              className="slick-arrow"
                            >
                              <span className="tie-icon-angle-left" />
                            </li>

                            <li
                              className="slick-arrow"
                              style={
                                posts?.pageInfo?.hasNextPage !== true
                                  ? {
                                      pointerEvents: "none",
                                      opacity: "0.3",
                                    }
                                  : {}
                              }
                              onClick={() => {
                                setAfter(posts?.pageInfo?.endCursor);
                                setBefore("");
                                setLast(null);
                                setFirst(2);
                              }}
                            >
                              <span className="tie-icon-angle-right" />
                            </li>
                          </ul>
                          <div
                            aria-live="polite"
                            className="slick-list draggable"
                          >
                            <div
                              className="slick-track"
                              style={{
                                opacity: 1,
                                width: 4680,
                                transform: "translate3d(-1170px, 0px, 0px)",
                              }}
                              role="listbox"
                            >
                              <div
                                className="slide slick-slide slick-cloned"
                                data-slick-index={-1}
                                id=""
                                aria-hidden="true"
                                style={{ width: 1170 }}
                                tabIndex={-1}
                              >
                                <div
                                  style={{
                                    backgroundImage:
                                      "url(images/7-780x470.jpg)",
                                  }}
                                  className="grid-item slide-id-975 tie-slide-3 tie-video"
                                >
                                  <a
                                    href="#"
                                    className="all-over-thumb-link"
                                    aria-label="Spieth en danger de rater la coupe"
                                    tabIndex={-1}
                                  />
                                  <div className="thumb-overlay">
                                    <span className="tie-icon tie-media-icon" />
                                    <span className="post-cat-wrap">
                                      <a
                                        className="post-cat tie-cat-21"
                                        href="#"
                                        tabIndex={-1}
                                      >
                                        Style de vie
                                      </a>
                                    </span>
                                    <div className="thumb-content">
                                      <div className="thumb-meta">
                                        <span className="date meta-item tie-icon">
                                          il y a 1 heure
                                        </span>
                                      </div>
                                      <h2 className="thumb-title">
                                        <a href="#" tabIndex={-1}>
                                          Spieth en danger de rater la coupe
                                        </a>
                                      </h2>
                                      <div className="thumb-desc">
                                        Stay focused and remember we design the
                                        best WordPress News and Magazine Themes.
                                        It’s the ones closest to you that…
                                      </div>
                                      {/* .thumb-desc */}
                                    </div>{" "}
                                    {/* .thumb-content /*/}
                                  </div>
                                  {/* .thumb-overlay /*/}
                                </div>
                                {/* .slide || .grid-item /*/}

                                {/* .slide || .grid-item /*/}
                              </div>
                              <div
                                className="slide slick-slide slick-current slick-active anim-slider"
                                data-slick-index={0}
                                aria-hidden="false"
                                style={{ width: 1170 }}
                                tabIndex={-1}
                                role="option"
                                data-aria-describedby="slick-slide10"
                              >
                                {/*  hne tabda slide loula*/}
                                {posts?.nodes?.slice(0, 2).map((post) => {
                                  return (
                                    <div
                                      key={post.slug}
                                      style={{
                                        backgroundImage: `url(${post.featuredImage.node.sourceUrl})`,
                                      }}
                                      className="grid-item slide-id-977 tie-slide-1 tie-slider slider-image
                                      "
                                    >
                                      <a
                                        href={`/posts/${post.slug}`}
                                        className=" all-over-thumb-link"
                                        aria-label={post.title}
                                        tabIndex={0}
                                      />
                                      <div className="thumb-overlay">
                                        <span className="tie-icon tie-media-icon" />
                                        <span className="post-cat-wrap">
                                          <a
                                            className="post-cat tie-cat-21"
                                            href="#"
                                            tabIndex={0}
                                          >
                                            Style de vie
                                          </a>
                                        </span>
                                        <div className="thumb-content">
                                          <div className="thumb-meta">
                                            <span className="date meta-item tie-icon">
                                              {moment(post.date).format(
                                                "DD MMMM YYYY"
                                              )}
                                            </span>
                                          </div>
                                          <h2 className="thumb-title">
                                            <a
                                              href={`/posts/${post.slug}`}
                                              tabIndex={0}
                                            >
                                              {post.title}
                                            </a>
                                          </h2>
                                          < div className="thumb-desc"  dangerouslySetInnerHTML={{__html: post.excerpt}} />
                                       
                                          {/* .thumb-desc */}
                                        </div>{" "}
                                        {/* .thumb-content /*/}
                                      </div>
                                      {/* .thumb-overlay /*/}
                                    </div>
                                  );
                                })}
                                {/*  hne toufa slide loula*/}

                              
                              </div>
                            </div>
                          </div>

                          {/* .slide */}
                          {/* .slide */}
                        </div>
                        {/* .tie-slick-slider /*/}
                      </div>
                      {/* container /*/}
                    </div>
                    {/* .main-slider-inner  /*/}
                  </div>
                  {/* .main-slider /*/}
                </div>
                {/* .slider-area-inner */}
              </section>
              {/* .slider-area */}
            </div>
            {/* .main-content /*/}
          </div>
          {/* .main-content-row /*/}
        </div>
        {/* .container /*/}
      </div>
      {/* .section-item /*/}
    </div>
  );
};

export default SlideVideo;
