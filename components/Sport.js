import { useState, useEffect } from "react";
import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
// import Loader from "react-loading-spin";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 1
    }
  }
};

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

async function getPosts(cat,after,before,last,first) {
  const res1 = await fetch("http://localhost/jannah/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        posts (${last ? `,last:${last}`: "last: null"} , ${first ? `,first:${first}`: "first: null"}, ${after ? `,after:"${after}"`: ""} ${before ? `,before:"${before}"`: ""} ,where: {${cat ? `categoryId: ${cat}` : ""}}){
          nodes {
            slug
            date
            title
            excerpt
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

export default function Sport () {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState();
  const [after,setAfter]=useState();
  const [before,setBefore]=useState();
  const [first,setFirst]=useState(6);
  const [last,setLast]=useState();
  const moment= require ("moment");
  

  useEffect(() => {
    getPosts(cat,after,before,last,first).then((data) => setPosts(data));
  }, [cat,after,before,last,first]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);
  const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

    return ( 
    <div id="tie-block_1160"
        className="mag-box big-post-top-box has-first-big-post box-dark-skin dark-skin has-custom-color"
        data-current={1}
      >
        <div className="container-wrapper">
          <div className="mag-box-title the-global-title">
            <h3>Sports </h3>
            <div className="tie-alignright">
              <div className="mag-box-options">
                <ul
                  className="mag-box-filter-links is-flex-tabs"
                  style={{ opacity: 1 }}
                >
                  <li>
                    <a
                         
                          data-id={""}
                          className={ !cat || cat === "" ? "active" : ""}
                          onClick={() => {
                            setCat("");
                           
                             }}
                        > Tout
                    </a>
                  </li>
                  {/* <Loader 
                            duration="2s"
                            numberOfRotationsInAnimation={2}/> */}
                  {categories?.nodes?.map((categ) => {
                    return (
                      <li key={categ.categoryId}>
                     <a
                          
                          data-id={categ.categoryId}
                          className={categ.categoryId === cat ? "active" : ""}
                          onClick={() => {
                            setCat(categ.categoryId);
                            setBefore("");                                               
                            setAfter("") ;                       
                            setFirst(null); 
                            setLast(null); 
                            
                          
                             }}
                        >
                      {categ.name}
                    </a>
                  </li>
                  )})}
              
                </ul>
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
            <motion.ul className="posts-items posts-list-container"
              variants={container}
              initial="hidden"
              animate="visible">
            
              {posts?.nodes?.slice(0, 1).map((post) => {

return (
              <motion.li className="post-item  tie-video " key={post.slug} variants={item}>
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
                        1
                      </span>
                      <span className="meta-views meta-item hot">
                        <span
                          className="tie-icon-fire"
                          aria-hidden="true"
                        />
                        3&nbsp;211
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
              </motion.li>  );
            })}
              
             {/* first-post /*/}
             {posts?.nodes?.slice(1, 5).map((post) => {

return (
              <motion.li className="post-item  tie-slider "  key={post.slug} variants={item}>
                <a
                  aria-label={post.title}
                  href={`/posts/${post.slug}`}
                  className="post-thumb"
                >
                  {post.featuredImage.node.sourceUrl && (
                  <Image
                    width={120}
                    height={75}
                    src={post.featuredImage.node.sourceUrl}
                    className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                    alt=""
                    loading="lazy"
                  />
                  )}
                </a>
                <div className="post-details">
                  <div className="post-meta clearfix">
                    <span className="date meta-item tie-icon">
                    { moment(post.date).format("DD MMMM YYYY")}
                    </span>
                  </div>
                  {/* .post-meta */}
                  <h2 className="post-title">
                  <a href={`/posts/${post.slug}`}>{post.title}</a>
                  </h2>
                </div>
                {/* .post-details /*/}
              </motion.li>
              
              );
            })}
          
            </motion.ul>
            
            <div className="clearfix" />
          </div>
          {/* .mag-box-container /*/}
        </div>
        {/* .container-wrapper /*/}
        
      </div>
      
      
      );
}
