import Image from 'next/image'

const WidgetMostV = () => {
    return (  <div
        id="posts-list-widget-6"
        className="container-wrapper widget posts-list"
      >
        <div className="widget-title the-global-title">
          <div className="the-subtitle">
            Most Viewed
            <span className="widget-title-icon tie-icon" />
          </div>
        </div>
        <div className="widget-posts-list-container posts-list-counter">
          <ul className="posts-list-items widget-posts-wrapper">
            <li className="widget-single-post-item widget-post-list tie-audio">
              <div className="post-widget-thumbnail">
                <a
                  aria-label="Les appartements vacants augmentent pour la première fois en 6 ans"
                  href="#"
                  className="post-thumb"
                >
                  <Image
                    width={110}
                    height={75}
                    src="/images/11-220x150.jpg"
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
                  href="#"
                >
                  Les appartements vacants augmentent pour la
                  première fois en 6 ans
                </a>
                <div className="post-meta">
                  <span className="date meta-item tie-icon">
                    il y a 1 heure
                  </span>
                </div>
              </div>
            </li>
            <li className="widget-single-post-item widget-post-list tie-video">
              <div className="post-widget-thumbnail">
                <a
                  aria-label="Le patron de Xbox parle du prix du projet Scorpio"
                  href="#"
                  className="post-thumb"
                >
                  <Image
                     width={110}
                     height={75}
                    src="/images/12-220x150.jpg"
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
                  href="#"
                >
                  Le patron de Xbox parle du prix du projet
                  Scorpio
                </a>
                <div className="post-meta">
                  <span className="date meta-item tie-icon">
                    il y a 1 heure
                  </span>
                </div>
              </div>
            </li>
            <li className="widget-single-post-item widget-post-list tie-audio">
              <div className="post-widget-thumbnail">
                <a
                  aria-label="Quinoa nouvelles recettes, feta et salade de fèves"
                  href="#"
                  className="post-thumb"
                >
                  <Image
                    width={110}
                     height={75}
                    src="/images/15-220x150.jpg"
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
                  href="#"
                >
                  Quinoa nouvelles recettes, feta et salade de
                  fèves
                </a>
                <div className="post-meta">
                  <span className="date meta-item tie-icon">
                    il y a 1 heure
                  </span>
                </div>
              </div>
            </li>
            <li className="widget-single-post-item widget-post-list tie-thumb">
              <div className="post-widget-thumbnail">
                <a
                  aria-label="Ce que nous voyons quand on regarde des photo de voyage"
                  href="#"
                  className="post-thumb"
                >
                  <Image
                    width={110}
                     height={75}
                    src="/images/7-220x150.jpg"
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
                  href="#"
                >
                  Ce que nous voyons quand on regarde des
                  photo de voyage
                </a>
                <div className="post-meta">
                  <span className="date meta-item tie-icon">
                    il y a 1 heure
                  </span>
                </div>
              </div>
            </li>
            <li className="widget-single-post-item widget-post-list tie-map">
              <div className="post-widget-thumbnail">
                <a
                  aria-label="Le guide ultime des tisanes"
                  href="#"
                  className="post-thumb"
                >
                  <Image
                    width={110}
                     height={75}
                    src="/images/7-220x150.jpg"
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
                  href="#"
                >
                  Le guide ultime des tisanes
                </a>
                <div className="post-meta">
                  <span className="date meta-item tie-icon">
                    il y a 1 heure
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="clearfix" />
      </div> );
}
 
export default WidgetMostV;