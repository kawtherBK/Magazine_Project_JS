import { useState, useEffect } from "react";
import React from "react";
import Image from 'next/image'
import Link from 'next/link'


async function getPosts(after,before,last,first) {
  const res = await fetch("http://localhost/jannah/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        posts (${last ? `,last:${last}`: "last: null"} , ${first ? `,first:${first}`: "first: null"}, ${after ? `,after:"${after}"`: ""} ${before ? `,before:"${before}"`: ""} ,where: {categoryId: 2}){
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
  console.log(json)
  return json.data.posts;

}


const Monde = () => {
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
 
    return (
    <div className="container-wrapper">
      <div className="mag-box-title the-global-title">
        <h3>Monde </h3>
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
          <li className="post-item  tie-slider" key={post.slug}>
            <a
              aria-label={post.title}
              href={`/posts/${post.slug}`}
              className="post-thumb"
            >
              <span className="post-cat-wrap">
                <span className="post-cat tie-cat-21"> {post.categories.nodes.name}</span>
              </span>
              {post.featuredImage.node.sourceUrl && (
                <Image
                width={390}
                height={220}
                src={post.featuredImage.node.sourceUrl || ''}
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
                <span className="date meta-item tie-icon"> { moment(post.date).format("DD MMMM YYYY")}</span>
                <div className="tie-alignright">
                  <span className="meta-comment tie-icon meta-item fa-before">
                    {post.commentCount}
                  </span>
                  <span className="meta-views meta-item hot">
                    <span className="tie-icon-fire" aria-hidden="true" />{" "}
                    3&nbsp;919
                  </span>
                </div>
              </div>
              {/* .post-meta */}
              <h2 className="post-title">
                <a href={`/posts/${post.slug}`}>{post.title}</a>
              </h2>
              < p className="post-excerpt"
              dangerouslySetInnerHTML={{__html: post.excerpt}} 
              />
              <a className="more-link button" href={`/posts/${post.slug}`}>
                Lire la suite »
              </a>
            </div>
            {/* .post-details /*/}
          </li>
          );
        })}
          {/* .first-post */}
          {posts?.nodes?.slice(1, 3).map((post) => {

return (
          <li className="post-item  tie-video"  key={post.slug}>
            <a
              aria-label={post.title}
              href={`/posts/${post.slug}`}
              className="post-thumb"
            >
              {post.featuredImage.node.sourceUrl && (
                <Image
                width={100}
                height={65}
                src={post.featuredImage.node.sourceUrl}
                className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                alt=""
                loading="lazy"
              /> 
              )}
                              
            </a>
            <div className="post-details">
              <div className="post-meta clearfix">
                <span className="date meta-item tie-icon"> { moment(post.date).format("DD MMMM YYYY")}</span>
              </div>
              {/* .post-meta */}
              <h2 className="post-title">
                
                <a href={`/posts/${post.slug}`}>{post.title}</a>
               
              </h2>
            </div>
            {/* .post-details /*/}
          </li>
           );
          })}
        </ul>
        <div className="clearfix" />
      </div>
      {/* .mag-box-container /*/}
    </div>
   
 );
}
 
export default Monde;