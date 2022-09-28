import { useState, useEffect } from "react";
import React from "react";
import Image from 'next/image'
import Link from 'next/link'


async function getPosts(after,first) {
  const res1 = await fetch("http://localhost/jannah/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        posts ( ${first ? `,first:${first}`: "first: null"}, ${after ? `,after:"${after}"`: ""}){
          nodes {
            slug
            excerpt
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

const News = () => {
    const [posts, setPosts] = useState([]);
    //const [categories, setCategories] = useState([]);
    const [after,setAfter]=useState();
    //const [before,setBefore]=useState();
    const [first,setFirst]=useState(6);
    //const [last,setLast]=useState();
    const moment= require ("moment");
    
  
    useEffect(() => {
      getPosts(after,first).then((data) => setPosts(data));
    }, [after,first]);
    return ( <div
        id="tie-s_1441"
        className="mag-box big-posts-box has-custom-color"
        data-current={1}
        >
        <div className="container-wrapper">
          <div className="mag-box-title the-global-title">
            <h3>What s new </h3>
          </div>
          {/* .mag-box-title /*/}
          <div className="mag-box-container clearfix">
            <ul className="posts-items posts-list-container">
            {posts?.nodes?.slice(0.2).map((post) => {

return (
              <li className="post-item  post-977 post type-post status-publish format-standard has-post-thumbnail category-tie-life-style tag-classique tie-slider"  key={post.slug}>
                <a
                  aria-label={post.title}
                  href={`/posts/${post.slug}`}
                  className="post-thumb"
                >
                  <span className="post-cat-wrap">
                    <span className="post-cat tie-cat-21">
                    {post.categories.nodes.name}
                    </span>
                  </span>
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
                <div className="post-details">
                  <div className="post-meta clearfix">
                    <span className="author-meta single-author no-avatars">
                      <span className="meta-item meta-author-wrapper meta-author-1">
                        <span className="meta-author">
                          <a
                            href="#"
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
                        />{" "}
                        3&nbsp;919
                      </span>
                    </div>
                  </div>
                  {/* .post-meta */}
                  <h2 className="post-title">
                    <a href={`/posts/${post.slug}`}> 
                    {post.title}
                    </a>
                  </h2>
                  < p className="post-excerpt"
              dangerouslySetInnerHTML={{__html: post.excerpt}} 
              />
                </div>
              </li>
              );
            })}
             
            </ul>
            <div className="clearfix" />
          </div>
          {/* .mag-box-container /*/}
          
          <a  style={posts?.pageInfo?.hasNextPage !== true ? {
                pointerEvents: "none",
                opacity: "0.3"
              }: {}}
                     onClick={() => {
                      setAfter(posts?.pageInfo?.endCursor);
                      
                                            
                      setFirst(4)  
                     }} 
                     className="block-pagination next-posts show-more-button load-more-button"
                     data-text="Charger plus"
                   >
                     Charger plus
                   </a>
        </div>
        {/* .container-wrapper /*/}
        </div> );
}
 
export default News;

