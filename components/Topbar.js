import { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
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
      }){
         
          nodes {
            slug          
            title       
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
export default function Topbar() {
  const moment = require("moment");
  var day = moment().format("dddd MMMM DD YYYY");
  const [posts, setPosts] = useState([]);
  const [after, setAfter] = useState();
  const [before, setBefore] = useState();
  const [first, setFirst] = useState(20);
  const [last, setLast] = useState();

  useEffect(() => {
    getPosts(after, before, last, first).then((data) => setPosts(data));
  }, [after, before, last, first]);

  return (
    <nav
      id="top-nav"
      className="has-date-breaking-components top-nav header-nav has-breaking-news"
      aria-label="Navigation secondaire"
    >
      <div className="container">
        <div className="topbar-wrapper">
          <div className="topbar-today-date tie-icon">{day}</div>

          <div className="tie-alignleft">
            <div className="breaking controls-is-active">
              <span className="breaking-title">
                <span
                  className="tie-icon-bolt breaking-icon"
                  aria-hidden="true"
                ></span>
                <span className="breaking-title-text">Breaking News</span>
              </span>

              <div
                id="ticker-wrapper-1650550123722"
                className="ticker-wrapper has-js ticker-dir-left ticker-content"
              >
                <div id="ticker-1650550123722" className="ticker">
                <Typewriter
            options={{
              strings: posts?.nodes?.map((post) => post.title),
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
              delay:30,
              cursor:"_",
              pasteString:"<a href={`/posts/${post.slug}`}></a>"
             
            }}
          />
          </div>
  {/* <a href={`/posts/${post.slug}`}>{post.title}</a> */}
                     
                <ul
                  id="ticker-controls-1650550123722"
                  className="breaking-news-nav slider-arrow-nav "
                >
                  <li
                    id="prev-1650550123722"
                    onClick={() => {
                      setBefore(posts?.pageInfo?.startCursor);
                      setLast(1);
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
                    className="jnt-prev controls"
                  />

                  <li
                    id="next-1650550123722"
                   
                    onClick={() => {
                      setAfter(posts?.pageInfo?.endCursor);
                      setBefore("");
                      setLast(null);
                      setFirst(1);
                    }}
                    style={
                        posts?.pageInfo?.hasNextPage !== true
                          ? {
                              pointerEvents: "none",
                              opacity: "0.3",
                            }
                          : {}
                      }
                    className="jnt-next controls"
                  />
                </ul>
              </div>
            </div>
          </div>

          <div className="tie-alignright">
            <ul className="components">
              <li className="side-aside-nav-icon menu-item custom-menu-link">
                <a href="#">
                  <span className="tie-icon-navicon" aria-hidden="true"></span>
                  <span className="screen-reader-text">
                    Sidebar (barre latérale)
                  </span>
                </a>
              </li>
              <li className="random-post-icon menu-item custom-menu-link">
                <a
                  href="#"
                  className="random-post"
                  title="Article Aléatoire"
                  rel="nofollow"
                >
                  <span className="tie-icon-random" aria-hidden="true"></span>
                  <span className="screen-reader-text">Article Aléatoire</span>
                </a>
              </li>

              <li className=" popup-login-icon menu-item custom-menu-link">
                <a href="#" className="lgoin-btn tie-popup-trigger">
                  <span className="tie-icon-author" aria-hidden="true"></span>
                  <span className="screen-reader-text">Connexion</span>{" "}
                </a>
              </li>

              <li className="social-icons-item">
                <a
                  className="social-link instagram-social-icon"
                  rel="external noopener nofollow"
                  target="_blank"
                  href="#"
                >
                  <span className="tie-social-icon tie-icon-instagram"></span>
                  <span className="screen-reader-text">Instagram</span>
                </a>
              </li>
              <li className="social-icons-item">
                <a
                  className="social-link youtube-social-icon"
                  rel="external noopener nofollow"
                  target="_blank"
                  href="#"
                >
                  <span className="tie-social-icon tie-icon-youtube"></span>
                  <span className="screen-reader-text">YouTube</span>
                </a>
              </li>
              <li className="social-icons-item">
                <a
                  className="social-link twitter-social-icon"
                  rel="external noopener nofollow"
                  target="_blank"
                  href="#"
                >
                  <span className="tie-social-icon tie-icon-twitter"></span>
                  <span className="screen-reader-text">Twitter</span>
                </a>
              </li>
              <li className="social-icons-item">
                <a
                  className="social-link facebook-social-icon"
                  rel="external noopener nofollow"
                  target="_blank"
                  href="#"
                >
                  <span className="tie-social-icon tie-icon-facebook"></span>
                  <span className="screen-reader-text">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
