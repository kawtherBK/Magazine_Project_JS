import Image from 'next/image'

const Footer = () => {
    return ( 
       <div id="footer"

        className="site-footer dark-skin dark-widgetized-area"
      >
        <div id="footer-widgets-container">
          <div className="container">
            <div className="footer-widget-area ">
              <div className="tie-row">
                {/* BK-Most Viewed Posts-footer*/}
                <div className="tie-col-md-3 normal-side">
                  <div
                    id="posts-list-widget-1"
                    className="container-wrapper widget posts-list"
                  >
                    <div className="widget-title the-global-title">
                      <div className="the-subtitle">
                        Most Viewed Posts
                        <span className="widget-title-icon tie-icon" />
                      </div>
                    </div>
                    <div className="widget-posts-list-container timeline-widget">
                      <ul className="posts-list-items widget-posts-wrapper">
                        <li className="widget-single-post-item">
                          <a href="#">
                            <span className="date meta-item tie-icon">
                              il y a 1 heure
                            </span>
                            <h3>
                              Les appartements vacants augmentent pour la
                              première fois en 6 ans
                            </h3>
                          </a>
                        </li>
                        <li className="widget-single-post-item">
                          <a href="#">
                            <span className="date meta-item tie-icon">
                              il y a 1 heure
                            </span>
                            <h3>
                              Le patron de Xbox parle du prix du projet Scorpio
                            </h3>
                          </a>
                        </li>
                        <li className="widget-single-post-item">
                          <a href="#">
                            <span className="date meta-item tie-icon">
                              il y a 1 heure
                            </span>
                            <h3>
                              Quinoa nouvelles recettes, feta et salade de fèves
                            </h3>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix" />
                  </div>
                  {/* .widget /*/}
                </div>
                {/* BK-end-Most Viewed Posts-footer*/}
                {/* .tie-col /*/}
                {/* BK-last-postes-footer*/}
                <div className="tie-col-md-3 normal-side">
                  <div
                    id="posts-list-widget-2"
                    className="container-wrapper widget posts-list"
                  >
                    <div className="widget-title the-global-title">
                      <div className="the-subtitle">
                        Last Modified Posts
                        <span className="widget-title-icon tie-icon" />
                      </div>
                    </div>
                    <div className="widget-posts-list-container posts-pictures-widget">
                      <div className="tie-row widget-posts-wrapper">
                        <div className="widget-single-post-item tie-col-xs-4 tie-video">
                          <a
                            aria-label="La persuasion est souvent plus efficace que la force"
                            href="#"
                            className="post-thumb"
                          >
                            <Image
                              width={390}
                              height={220}
                              src="/images/2-390x220.jpg"
                              className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div className="widget-single-post-item tie-col-xs-4 tie-slider">
                          <a
                            aria-label="Astuce du jour: That man again"
                            href="#"
                            className="post-thumb"
                          >
                            <Image
                              width={390}
                              height={220}
                              src="/images/9-390x220.jpg"
                              className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                              alt=""
                              loading="lazy"/>
                          </a>
                        </div>
                        <div className="widget-single-post-item tie-col-xs-4 tie-video">
                          <a
                            aria-label="Spieth en danger de rater la coupe"
                            href="#"
                            className="post-thumb"
                          >
                            <Image
                              width={390}
                              height={220}
                              src="/images/17-390x220.jpg"
                              className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div className="widget-single-post-item tie-col-xs-4 tie-map">
                          <a
                            aria-label="Les fans de Hibs et de Ross County en finale"
                            href="#"
                            className="post-thumb"
                          >
                            <Image
                              width={390}
                              height={220}
                              src="/images/12-390x220.jpg"
                              className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div className="widget-single-post-item tie-col-xs-4 tie-slider">
                          <a
                            aria-label="Une hirondelle ne fait pas le printemps"
                            href="#"
                            className="post-thumb"
                          >
                            <Image
                              width={390}
                              height={220}
                              src="/images/4-390x220.jpg"
                              className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div className="widget-single-post-item tie-col-xs-4 tie-audio">
                          <a
                            aria-label="Je sais que ça fait mal de dire au revoir, mais il est temps pour moi de prendre mon envol"
                            href="#"
                            className="post-thumb"
                          >
                            <Image
                              width={390}
                              height={220}
                              src="/images/8-390x220.jpg"
                              className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                              alt=""
                              loading="lazy" />
                          </a>
                        </div>
                        <div className="widget-single-post-item tie-col-xs-4 tie-slider">
                          <a
                            aria-label="Les nouveaux personnages de Heroes of the storm apportent des portails"
                            href="#"
                            className="post-thumb"
                          >
                            <Image
                              width={390}
                              height={220}
                              src="/images/12-390x220.jpg"
                              className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div className="widget-single-post-item tie-col-xs-4 tie-map">
                          <a
                            aria-label="Le guide ultime des tisanes"
                            href="#"
                            className="post-thumb"
                          >
                            <Image
                              width={390}
                              height={220}
                              src="/images/7-390x220.jpg"
                              className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div className="widget-single-post-item tie-col-xs-4 tie-thumb">
                          <a
                            aria-label="Ce que nous voyons quand on regarde des photo de voyage"
                            href="#"
                            className="post-thumb"
                          >
                            <Image
                              width={390}
                              height={220}
                              src="/images/7-390x220.jpg"
                              className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                  {/* .widget /*/}
                </div>
                {/* .tie-col /*/}
                {/* BK-end-last-postes-footer*/}
                {/* BK-tags-footer*/}
                <div className="tie-col-md-3 normal-side">
                  <div
                    id="tag_cloud-1"
                    className="container-wrapper widget widget_tag_cloud"
                  >
                    <div className="widget-title the-global-title">
                      <div className="the-subtitle">
                        Tags
                        <span className="widget-title-icon tie-icon" />
                      </div>
                    </div>
                    <div className="tagcloud">
                      <a
                        href="#"
                        className="tag-cloud-link tag-link-12 tag-link-position-1"
                        style={{ fontSize: "17.333333333333pt" }}
                        aria-label="Alimentation (4 éléments)"
                      >
                        Alimentation
                      </a>
                      <a
                        href="#"
                        className="tag-cloud-link tag-link-9 tag-link-position-2"
                        style={{ fontSize: "15pt" }}
                        aria-label="Business (3 éléments)"
                      >
                        Business
                      </a>
                      <a
                        href="#"
                        className="tag-cloud-link tag-link-7 tag-link-position-3"
                        style={{ fontSize: "22pt" }}
                        aria-label="Classique (7 éléments)"
                      >
                        Classique
                      </a>
                      <a
                        href="#"
                        className="tag-cloud-link tag-link-3 tag-link-position-4"
                        style={{ fontSize: "22pt" }}
                        aria-label="Contenu (7 éléments)"
                      >
                        Contenu
                      </a>
                      <a
                        href="#"
                        className="tag-cloud-link tag-link-20 tag-link-position-5"
                        style={{ fontSize: "12.2pt" }}
                        aria-label="Couleur (2 éléments)"
                      >
                        Couleur
                      </a>
                      <a
                        href="#"
                        className="tag-cloud-link tag-link-16 tag-link-position-6"
                        style={{ fontSize: "17.333333333333pt" }}
                        aria-label="Jeux (4 éléments)"
                      >
                        Jeux
                      </a>
                      <a
                        href="#"
                        className="tag-cloud-link tag-link-4 tag-link-position-7"
                        style={{ fontSize: "19.2pt" }}
                        aria-label="Monde (5 éléments)"
                      >
                        Monde
                      </a>
                      <a
                        href="#/"
                        className="tag-cloud-link tag-link-8 tag-link-position-8"
                        style={{ fontSize: "19.2pt" }}
                        aria-label="Style de vie (5 éléments)"
                      >
                        Style de vie
                      </a>
                      <a
                        href="#"
                        className="tag-cloud-link tag-link-17 tag-link-position-9"
                        style={{ fontSize: "12.2pt" }}
                        aria-label="Tech (2 éléments)"
                      >
                        Tech
                      </a>
                      <a
                        href="#"
                        className="tag-cloud-link tag-link-13 tag-link-position-10"
                        style={{ fontSize: "8pt" }}
                        aria-label="Timeline (1 élément)"
                      >
                        Timeline
                      </a>
                      <a
                        href="#"
                        className="tag-cloud-link tag-link-6 tag-link-position-11"
                        style={{ fontSize: "19.2pt" }}
                        aria-label="Voyage (5 éléments)"
                      >
                        Voyage
                      </a>
                      <a
                        href="#"
                        className="tag-cloud-link tag-link-5 tag-link-position-12"
                        style={{ fontSize: "22pt" }}
                        aria-label="À propos (7 éléments)"
                      >
                        À propos
                      </a>
                      <a
                        href="#"
                        className="tag-cloud-link tag-link-11 tag-link-position-13"
                        style={{ fontSize: "19.2pt" }}
                        aria-label="Équipe (5 éléments)"
                      >
                        Équipe
                      </a>
                    </div>
                    <div className="clearfix" />
                  </div>
                  {/* .widget /*/}
                </div>
                {/* BK-end-tags-footer*/}
                {/* .tie-col /*/}
                {/* BK-Followus-footer*/}
                <div className="tie-col-md-3 normal-side">
                  <div
                    id="latest_tweets_widget-1"
                    className="container-wrapper widget latest-tweets-widget"
                  >
                    <div className="widget-title the-global-title">
                      <div className="the-subtitle">
                        <a href="#" rel="nofollow noopener">
                          Follow us
                        </a>
                        <span className="widget-title-icon tie-icon" />
                      </div>
                    </div>
                    <ul>
                      <li className="slide">
                        <div className="twitter-icon-wrap">
                          {" "}
                          <span
                            className="tie-icon-twitter"
                            aria-hidden="true"
                          />{" "}
                        </div>
                        <div className="tweetaya-body">
                          <p>
                            Coming Soon, Stay Tuned{" "}
                            <a
                              href="https://twitter.com/#search?q=jannah"
                              target="_blank"
                              // rel="nofollow noopener noreferrer"
                              rel="noopener noreferrer"
                            >
                              #jannah
                            </a>{" "}
                            <a
                              href="https://twitter.com/#search?q=big_update"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              #big_update
                            </a>{" "}
                            <a
                              href="https://twitter.com/#search?q=jannah5"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              #jannah5
                            </a>{" "}
                            <a
                              href="https://twitter.com/#search?q=wordpress"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              #wordpress
                            </a>{" "}
                            <a
                              href="//t.co/IQsH1hLnMr"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              https://t.co/IQsH1hLnMr
                            </a>
                          </p>
                          <span className="tweetaya-meta">
                            <a
                              href="https://twitter.com/tielabs/status/1294166595321962497"
                              title="2020/08/14 06:58:55"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              2020/08/14
                            </a>
                          </span>
                        </div>
                      </li>
                      <li className="slide">
                        <div className="twitter-icon-wrap">
                          {" "}
                          <span
                            className="tie-icon-twitter"
                            aria-hidden="true"
                          />{" "}
                        </div>
                        <div className="tweetaya-body">
                          <p>
                            Our new plugin WPCOVID-19 helps WordPress sites’
                            owners to display Coronavirus real-time data easily
                            on their sites…{" "}
                            <a
                              href="//t.co/953KekMqq0"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              https://t.co/953KekMqq0
                            </a>
                          </p>
                          <span className="tweetaya-meta">
                            <a
                              href="https://twitter.com/tielabs/status/1251797716822360066"
                              title="2020/04/19 09:00:07"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              2020/04/19
                            </a>
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="clearfix" />
                  </div>
                  {/* .widget /*/}
                </div>{" "}
                {/* BK-end-Followus-footer*/}
                {/* .tie-col /*/}
              </div>
              {/* .tie-row /*/}
            </div>
            {/* .footer-widget-area /*/}
            {/* BK-widget-footer*/}
            <div className="footer-widget-area ">
              <div className="tie-row">
                {/* BK-logoblanc-footer*/}
                <div className="tie-col-sm-4 normal-side">
                  <div
                    id="author-bio-widget-1"
                    className="container-wrapper widget aboutme-widget"
                  >
                    <div className="about-author about-content-wrapper">
                      <Image
                        alt=""
                        src="/images/logo-blanc.png"
                        style={{ marginTop: 15, marginBottom: 0 }}
                        className="about-author-img"
                        width={280}
                        height={47}
                      />
                      <div className="aboutme-widget-content"></div>
                      <div className="clearfix" />
                    </div>
                    {/* .about-widget-content */}
                    <div className="clearfix" />
                  </div>
                  {/* .widget /*/}
                </div>
                {/* .tie-col /*/}
                {/* BK-end-logoblanc-footer*/}
                {/* BK-descriptif-footer*/}
                <div className="tie-col-sm-4 normal-side">
                  <div
                    id="author-bio-widget-2"
                    className="container-wrapper widget aboutme-widget"
                  >
                    <div className="about-author about-content-wrapper">
                      <div className="aboutme-widget-content">
                        Jannah is a Clean Responsive WordPress Newspaper,
                        Magazine, News and Blog theme. Packed with options that
                        allow you to completely customize your website to your
                        needs.
                      </div>
                      <div className="clearfix" />
                    </div>
                    {/* .about-widget-content */}
                    <div className="clearfix" />
                  </div>
                  {/* .widget /*/}
                </div>
                {/* BK-end-descriptif-footer*/}
                {/* .tie-col /*/}
                {/* BK-Newsletter-footer*/}
                <div className="tie-col-sm-4 normal-side">
                  <div
                    id="tie-newsletter-1"
                    className="container-wrapper widget subscribe-widget"
                  >
                    <div className="widget-inner-wrap">
                      <div id="mc_embed_signup-tie-newsletter-1">
                        <form
                          action="#"
                          method="post"
                          id="mc-embedded-subscribe-form-tie-newsletter-1"
                          name="mc-embedded-subscribe-form"
                          className="subscribe-form validate"
                          target="_blank"
                          noValidate=""
                        >
                          <div className="mc-field-group">
                            <label
                              className="screen-reader-text"
                              htmlFor="mce-EMAIL-tie-newsletter-1"
                            >
                              Entrez votre adresse Email
                            </label>
                            <input
                              type="email"
                              defaultValue=""
                              id="mce-EMAIL-tie-newsletter-1"
                              placeholder="Entrez votre adresse Email"
                              name="EMAIL"
                              className="subscribe-input required email"
                            />
                          </div>
                          <input
                            type="submit"
                            defaultValue="S'abonner"
                            name="subscribe"
                            className="button subscribe-submit"
                          />
                        </form>
                      </div>
                    </div>
                    {/* .widget-inner-wrap /*/}
                    <div className="clearfix" />
                  </div>
                  {/* .widget /*/}
                </div>
                {/* .tie-col /*/}
                {/* BK-end-Newsletter-footer*/}
                <div className=" normal-side"></div>
                {/* .tie-col /*/}
              </div>
              {/* .tie-row /*/}
            </div>
            {/* .footer-widget-area /*/}
          </div>
          {/* .container /*/}
        </div>
        {/* #Footer-widgets-container /*/}
        {/* #Footer-widgets-container /*/}
        {/* BK- /*/}
        <div id="site-info" className="site-info site-info-layout-2">
          <div className="container">
            <div className="tie-row">
              <div className="tie-col-md-12">
                {/* BK-Copyright-footer*/}
                <div className="copyright-text copyright-text-first">
                  © Copyright 2022, Tous droits réservés &nbsp;|&nbsp;{" "}
                  <span style={{ color: "red" }} className="tie-icon-heart" />
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Jannah Thème par TieLabs
                  </a>{" "}
                  | Hébergé par{" "}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    SiteGround
                  </a>
                </div>
                {/* BK-end-Copyright-footer*/}
                {/* BK-footer-menu */}
                <div className="footer-menu">
                  <ul id="menu-tielabs-secondry-menu" className="menu">
                    <li
                      id="menu-item-1014"
                      className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1014 tie-current-menu"
                    >
                      <a href="#" aria-current="page">
                        Accueil
                      </a>
                    </li>
                    <li
                      id="menu-item-1015"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1015"
                    >
                      <a href="#">À propos</a>
                    </li>
                    <li
                      id="menu-item-1016"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1016"
                    >
                      <a href="#">Équipe</a>
                    </li>
                    <li
                      id="menu-item-1017"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1017"
                    >
                      <a href="#">Monde</a>
                    </li>
                    <li
                      id="menu-item-1018"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1018"
                    >
                      <a href="#">Tech</a>
                    </li>
                    <li
                      id="menu-item-1019"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1019"
                    >
                      <a title="Acheter maintenant!" href="#">
                        Acheter maintenant!
                      </a>
                    </li>
                  </ul>
                </div>
                {/* BK-end-footer-menu */}
                {/* BK-footer-social-icons */}
                <ul className="social-icons">
                  <li className="social-icons-item">
                    <a
                      className="social-link facebook-social-icon"
                      rel="external noopener nofollow"
                      target="_blank"
                      href="#"
                    >
                      <span className="tie-social-icon tie-icon-facebook" />
                      <span className="screen-reader-text">Facebook</span>
                    </a>
                  </li>
                  <li className="social-icons-item">
                    <a
                      className="social-link twitter-social-icon"
                      rel="external noopener nofollow"
                      target="_blank"
                      href="#"
                    >
                      <span className="tie-social-icon tie-icon-twitter" />
                      <span className="screen-reader-text">Twitter</span>
                    </a>
                  </li>
                  <li className="social-icons-item">
                    <a
                      className="social-link youtube-social-icon"
                      rel="external noopener nofollow"
                      target="_blank"
                      href="#"
                    >
                      <span className="tie-social-icon tie-icon-youtube" />
                      <span className="screen-reader-text">YouTube</span>
                    </a>
                  </li>
                  <li className="social-icons-item">
                    <a
                      className="social-link instagram-social-icon"
                      rel="external noopener nofollow"
                      target="_blank"
                      href="#"
                    >
                      <span className="tie-social-icon tie-icon-instagram" />
                      <span className="screen-reader-text">Instagram</span>
                    </a>
                  </li>
                </ul>
                {/* BK-footer-social-icons */}
              </div>
              {/* .tie-col /*/}
            </div>
            {/* .tie-row /*/}
          </div>
          {/* .container /*/}
        </div>
        {/* #site-info /*/}
        </div>
       );
}
 
export default Footer;