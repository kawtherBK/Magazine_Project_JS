import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getComments() {
  const res1 = await fetch("http://localhost/jannah/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        comments {
          nodes {
             commentId
            content
            author {
              node {
                id
                ... on CommentAuthor {
                  name
                }
              }
            }
           
          }
        }
      }
             
              `,
    }),
  });

  const json1 = await res1.json();
  console.log(json1);
  return json1.data.comments;
}
async function getPosts() {
  const res2 = await fetch("http://localhost/jannah/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        posts (where: {orderby: {field: DATE, order: DESC}}) {
                  nodes {
                    slug
                    date
                    title
                    id
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
        }
             
              `,
    }),
  });

  const json2 = await res2.json();
  console.log(json2);
  return json2.data.posts;
}
async function getPop() {
  const res3 = await fetch("http://localhost/jannah/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        posts(where: {orderby: {field: COMMENT_COUNT, order: DESC}}) {
          nodes {
            date
            title
            id
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
              `,
    }),
  });

  const json3 = await res3.json();
  console.log(json3);
  return json3.data.posts;
}
const Widgettabulations = () => {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [pop, setPop] = useState([]);
  const moment = require("moment");

  useEffect(() => {
    getComments().then((data) => setComments(data));
  }, []);
  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);
  useEffect(() => {
    getPop().then((data) => setPop(data));
  }, []);

  console.log(comments);
  console.log(posts);
  console.log(pop);
  return (
    <div className="container-wrapper tabs-container-wrapper tabs-container-3">
      <div className="widget tabs-widget">
        <div className="widget-container">
          <div className="tabs-widget">
            <div className="tabs-wrapper">
              <ul className="tabs">
                <li className="">
                  <a onClick={getPosts}>Récent</a>
                </li>
                <li>
                  <a onClick={getPop}>Populaire</a>
                </li>
                <li>
                  <a onClick={getComments}>Commentaires</a>
                </li>
              </ul>
              {/* ul.tabs-menu /*/}
              {/* */}
              <div
                id="widget_tabs-2-recent"
                className="tab-content tab-content-recent"
              >
                <ul className="tab-content-elements">
                  {posts?.nodes?.slice(0, 5).map((post) => {
                    return (
                      <li
                        key={post.id}
                        className="widget-single-post-item widget-post-list tie-slider"
                      >
                        <div className="post-widget-thumbnail">
                          <a
                            aria-label="Une hirondelle ne fait pas le printemps"
                            href={`/posts/${post.slug}`}
                            className="post-thumb"
                          >
                            <Image
                              width={110}
                              height={75}
                              src={post.featuredImage.node.sourceUrl}
                              className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                        {/* post-alignleft /*/}
                        <div className="post-widget-body ">
                          <a
                            className="post-title the-subtitle"
                            href={`/posts/${post.slug}`}
                          >
                            {post.title}
                          </a>
                          <div className="post-meta">
                            <span className="date meta-item tie-icon">
                              {moment(post.date).format("DD MMMM YYYY")}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* .tab-content#recent-posts-tab /*/}
              <div
                id="widget_tabs-2-popular"
                className="tab-content tab-content-popular"
              >
                <ul className="tab-content-elements">
                  {posts?.nodes?.slice(0, 5).map((pop) => {
                    return (
                      <li  key={pop.id}className="widget-single-post-item widget-post-list">
                        <div className="post-widget-thumbnail">
                          <a
                            aria-label={pop.title}
                            href={`/posts/${pop.slug}`}
                            className="post-thumb"
                          >
                            <Image
                              width={220}
                              height={150}
                              src={pop.featuredImage.node.sourceUrl}
                              className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                        {/* post-alignleft /*/}

                        <div className="post-widget-body no-small-thumbs">
                          <a
                            className="post-title the-subtitle"
                            href={`/posts/${pop.slug}`}
                          >
                            {pop.title}
                          </a>
                          <div className="post-meta">
                            <span className="date meta-item tie-icon">
                              {moment(pop.date).format("DD MMMM YYYY")}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* .tab-content#popular-posts-tab /*/}
              {comments?.nodes?.slice(0, 5).map((com) => {
                return (
                  <div
                    key={com.commentId}
                    id="widget_tabs-2-comments"
                    className="tab-content tab-content-comments"
                  >
                    <ul className="tab-content-elements">
                      <li>
                        <div
                          className="post-widget-thumbnail"
                          style={{ width: 70 }}
                        >
                          <a className="author-avatar" href="#">
                            {/* a voir srcset */}
                            <Image
                              alt="Photo de Ivy Torres"
                              src="/images/29dfc19f0f889f9a43e44e733fcfda08.png"
                              className="avatar avatar-70 photo"
                              height={70}
                              width={70}
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div className="comment-body ">
                          <a className="comment-author" href="#">
                            {com.author.node.name}
                          </a>
                          <p>{com.content}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                );
              })}
              {/* .tab-content#comments-tab /*/}
            </div>
            {/* .tabs-wrapper-animated /*/}
          </div>
          {/* .tabs-widget /*/}
        </div>
        {/* .widget-container /*/}
      </div>
      {/* .tabs-widget /*/}
    </div>
  );
};

export default Widgettabulations;
