import { useState, useEffect } from "react";
import React from "react";
import Image from 'next/image'
import Link from 'next/link'


async function getPosts(after,before,last,first) {
  const res1 = await fetch("http://localhost/jannah/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        posts (${last ? `,last:${last}`: "last: null"} , ${first ? `,first:${first}`: "first: null"}, ${after ? `,after:"${after}"`: ""} ${before ? `,before:"${before}"`: ""}){
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
  console.log(json1)
  return json1.data.posts;

}

const Videos = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [after,setAfter]=useState();
  const [before,setBefore]=useState();
  const [first,setFirst]=useState(6);
  const [last,setLast]=useState();
  const moment= require ("moment");
  

  useEffect(() => {
    getPosts(after,before,last,first).then((data) => setPosts(data));
  }, [after,before,last,first]);
    return (  <div
        id="tie-block_1837"
        className="mag-box miscellaneous-box first-post-gradient has-first-big-post media-overlay has-custom-color"
        data-current={1}
      >
        <div className="container-wrapper">
          <div className="mag-box-title the-global-title">
            <h3>Videos </h3>
            <div className="tie-alignright">
              <div className="mag-box-options">
                <ul className="slider-arrow-nav">
                <li>
                      <a  
                      
                      onClick={() => {
                        setBefore(posts?.pageInfo?.startCursor);
                        setLast(6);                       
                        setAfter("") ;                       
                        setFirst(null);                            
                       
                        }}  
                        style={posts?.pageInfo?.hasPreviousPage !== true ? {
                          pointerEvents: "none",
                          opacity: "0.3"
                        }: {}}                   
                         className="block-pagination prev-posts" 
                         >                       
                      <span 
           
                     className="tie-icon-angle-left"
                     aria-hidden="true" >

                      </span>                     
                      <span className="screen-reader-text">
                        Page précédente
                      </span>
                    </a>
                  </li>
                  <li>
                    <a  style={posts?.pageInfo?.hasNextPage !== true ? {
                pointerEvents: "none",
                opacity: "0.3"
              }: {}}
                     onClick={() => {
                      setAfter(posts?.pageInfo?.endCursor);
                      setBefore("")
                      setLast(null)                        
                      setFirst(6)  
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
            <ul className="posts-items posts-list-container">
            {posts?.nodes?.slice(0, 1).map((post) => {

return (
              <li className="post-item tie-slider" key={post.slug}>
                <a
                  aria-label="Une hirondelle ne fait pas le printemps"
                  href="#"
                  className="post-thumb"
                >
                  <div className="post-thumb-overlay-wrap">
                    <div className="post-thumb-overlay">
                      <span className="tie-icon tie-media-icon" />
                    </div>
                  </div>
                  {post.featuredImage.node.sourceUrl && (
                  <Image
                    width={780}
                    height={470}
                    src={post.featuredImage.node.sourceUrl}
                    className="attachment-jannah-image-post size-jannah-image-post wp-post-image"
                    alt=""
                    loading="lazy"
                  />
                  )}
                </a>
                <div className="clearfix" />
                <div className="post-overlay">
                  <div className="post-content">
                    <a className="post-cat tie-cat-21" href="#">
                    {post.categories.nodes.name}
                    </a>
                    <h2 className="post-title">
                      <a href={`/posts/${post.slug}`}>
                      {post.title}
                      </a>
                    </h2>
                    <div className="thumb-meta">
                      <div className="post-meta clearfix">
                        <span className="author-meta single-author no-avatars">
                          <span className="meta-item meta-author-wrapper meta-author-1">
                            <span className="meta-author">
                              <a
                                href={`/posts/${post.slug}`}
                                className="author-name tie-icon"
                                title="webmaster"
                              >
                                 {post.author.node.name}
                              </a>
                            </span>
                          </span>
                        </span>
                        <span className="date meta-item tie-icon">
                        { moment(post.date).format("DD MMMM YYYY")}
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
                            3&nbsp;919{" "}
                          </span>
                        </div>
                      </div>
                      {/* .post-meta */}
                    </div>
                    {/* .thumb-meta */}
                  </div>
                  {/* .post-content */}
                </div>
                {/* .post-overlay */}
              </li>
              );
            })}
            {posts?.nodes?.slice(1, 4).map((post) => {

return (
              <li className="post-item tie-video" key={post.slug}>
                <a
                  aria-label="La persuasion est souvent plus efficace que la force"
                  href={`/posts/${post.slug}`}
                  className="post-thumb"
                >
                  <div className="post-thumb-overlay-wrap">
                    <div className="post-thumb-overlay">
                      <span className="tie-icon tie-media-icon" />
                    </div>
                  </div>
                  {post.featuredImage.node.sourceUrl && (
                  <Image
                    width={390}
                    height={220}
                    src={post.featuredImage.node.sourceUrl}
                    className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                    alt=""
                    loading="lazy"
                  />
                  )}
                </a>
                <div className="clearfix" />
                <div className="post-overlay">
                  <div className="post-content">
                    <div className="post-meta clearfix">
                      <span className="date meta-item tie-icon">
                      { moment(post.date).format("DD MMMM YYYY")}
                      </span>
                      <div className="tie-alignright">
                        <span className="meta-comment tie-icon meta-item fa-before">
                        {post.commentCount}
                        </span>
                      </div>
                    </div>
                    {/* .post-meta */}
                    <h2 className="post-title">
                      <a href={`/posts/${post.slug}`}>
                      {post.title}
                      </a>
                    </h2>
                    <div className="post-meta" />
                  </div>
                  {/* .post-content */}
                </div>
                {/* .post-overlay */}
              </li>
              );
            })}
            </ul>
            <div className="clearfix" />
          </div>
          {/* .mag-box-container /*/}
        </div>
        {/* .container-wrapper /*/}
      </div>);
}
 
export default Videos;