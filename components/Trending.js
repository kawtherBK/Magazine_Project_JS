import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

async function getPosts(cat, after, before, last, first) {
  const res1 = await fetch("http://localhost/jannah/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        posts (${last ? `,last:${last}` : "last: null"} , ${
        first ? `,first:${first}` : "first: null"
      }, ${after ? `,after:"${after}"` : ""} ${
        before ? `,before:"${before}"` : ""
      } ,where: {${cat ? `categoryId: ${cat}` : ""}}){
          nodes {
            slug
            commentCount
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

  const json1 = await res1.json();
  console.log(json1);
  return json1.data.posts;
}
async function getCategories() {
  const res2 = await fetch("http://localhost/jannah/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    query NewQuery {
     categories {
    nodes {
      categoryId
      name
    }
  }
}
           
            `,
    }),
  });

  const json2 = await res2.json();
  return json2.data.categories;
}

export default function Trending() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState();
  const [after, setAfter] = useState();
  const [before, setBefore] = useState();
  const [first, setFirst] = useState(6);
  const [last, setLast] = useState();
  const moment = require("moment");
  

  useEffect(() => {
    getPosts(cat, after, before, last, first).then((data) => setPosts(data));
  }, [cat, after, before, last, first]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div
        id="tie-block_3151"
        className="mag-box big-post-left-box big-thumb-left-box first-post-gradient has-custom-color"
        data-current={1}
      >
        <div className="container-wrapper">
          <div className="mag-box-title the-global-title">
            <h3>Trending News </h3>
            <div className="tie-alignright">
              <div className="mag-box-options">
                <ul
                  className="mag-box-filter-links is-flex-tabs"
                  style={{ opacity: 1 }}
                >
                  <li>
                    <a
                      data-id={""}
                      className={!cat || cat === "" ? "active" : ""}
                      onClick={() => {
                        setCat("");

                      }}
                    >
                      Tout
                    </a>
                  </li>
                  {categories?.nodes?.map((categ) => {
                    return (
                      <li key={categ.categoryId}>
                        <a
                          data-id={categ.categoryId}
                          className={categ.categoryId === cat ? "active" : ""}
                          onClick={() => {
                            setCat(categ.categoryId);
                            setBefore("");
                            setAfter("");
                            setFirst(null);
                            setLast(null);
                          }}
                        >
                          {categ.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <ul className="slider-arrow-nav">
                  <li>
                    <a
                      onClick={() => {
                        setBefore(posts?.pageInfo?.startCursor);
                        setLast(6);
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
                      className="block-pagination prev-posts"
                    >
                      <span
                        className="tie-icon-angle-left"
                        aria-hidden="true"
                      ></span>
                      <span className="screen-reader-text">
                        Page précédente
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
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
                        setFirst(6);
                      }}
                      className="block-pagination next-posts"
                    >
                      <span
                        className="tie-icon-angle-right"
                        aria-hidden="true"
                      />
                      <span className="screen-reader-text">Page suivante</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* .mag-box-options /*/}
            </div>
            {/* .tie-alignright /*/}
          </div>
          {/* .mag-box-title /*/}

          <div className="mag-box-container clearfix">
            <ul
              className="posts-items posts-list-container container "
             
            >
              {posts?.nodes?.slice(0, 1).map((post) => {
                return (
                  <li  
                    className="post-item tie-video fade-in-image"
                    key={post.slug}
                  >
                    <div
                      className="big-thumb-left-box-inner"
                      style={{
                        backgroundImage: `url(${post.featuredImage.node.sourceUrl})`,
                      }}
                    >
                      <a
                        aria-label={post.title}
                        href={`/posts/${post.slug}`}
                        className="post-thumb"
                      />
                      <div className="post-overlay">
                        <div className="post-content">
                          <a className="post-cat tie-cat-21" href="#">
                            {post?.categories?.nodes.name}
                          </a>
                          <h2 className="post-title">
                            <a href={`/posts/${post.slug}`}>{post.title}</a>
                          </h2>
                          <div className="thumb-meta">
                            <div className="post-meta clearfix">
                              <span className="author-meta single-author no-avatars">
                                <span className="meta-item meta-author-wrapper meta-author-1">
                                  <span className="meta-author">
                                    <a
                                      href=""
                                      className="author-name tie-icon"
                                      title="webmaster"
                                    >
                                      {post.author.node.name}
                                    </a>
                                  </span>
                                </span>
                              </span>
                              <span className="date meta-item tie-icon">
                                {moment(post.date).format("DD MMMM YYYY")}
                              </span>
                              <div className="tie-alignright">
                                <span className="meta-comment tie-icon meta-item fa-before">
                                  {post.commentCount}
                                </span>
                                <span className="meta-views meta-item hot">
                                  <span
                                    className="tie-icon-fire"
                                    aria-hidden="true"
                                  />
                                  3&nbsp;211{" "}
                                </span>
                              </div>
                            </div>
                            {/* .post-meta */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
              {posts?.nodes?.slice(1, 6).map((post) => {
                return (
                  <li
                 
                    className="post-item  tie-slider fade-in-image"
                    key={post.slug}
                  >
                    <div
                      aria-label={post.title}
                      href={`/posts/${post.slug}`}
                      className="post-thumb"
                    >
                      {post.featuredImage.node.sourceUrl && (
                        <Image
                          src={post.featuredImage.node.sourceUrl}
                          className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                          alt="post2"
                          width={110}
                          height={75}
                        />
                      )}
                    </div>
                    <div className="post-details">
                      <div className="post-meta clearfix">
                        <span className="date meta-item tie-icon">
                          {moment(post.date).format("DD MMMM YYYY")}
                        </span>
                      </div>
                      {/* .post-meta **/}
                      <h2 className="post-title">
                        <a href={`/posts/${post.slug}`}>{post.title}</a>
                      </h2>
                    </div>
                    {/* .post-details /**/}
                  </li>
                );
              })}
            </ul>

            <div className="clearfix" />
          </div>
          {/* .mag-box-container /*/}
        </div>
        {/* .container-wrapper /*/}
      </div>
    </>
  );
}
