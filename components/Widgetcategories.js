import { useState, useEffect } from "react";
import React from "react";
import Image from 'next/image'
import Link from 'next/link'

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
      count
    }
  }
}
           
            `,
    }),
  });

  const json2 = await res2.json();
  return json2.data.categories;
}


const Widgetcategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);
    return ( <div
        id="tie-widget-categories-1"
        className="container-wrapper widget widget_categories tie-widget-categories"
        >
        <div className="widget-title the-global-title">
          <div className="the-subtitle">
            Categories
            <span className="widget-title-icon tie-icon" />
          </div>
        </div>
        <ul>
        {categories?.nodes?.map((categ) => {
                    return (
          <li className="cat-item cat-counter tie-cat-item-2"  key={categ.categoryId}>
            <a
              href="#"
              title={categ.name}
            >
             {categ.name}
            </a>
            <span> {categ.count}</span>
          </li>
           );
          })}
         
        </ul>
        <div className="clearfix" />
        </div> );
}
 
export default Widgetcategories ;
