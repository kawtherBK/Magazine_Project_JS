const WidgetNewsletter = () => {
    return ( <div
        id="tie-newsletter-2"
        className="container-wrapper widget subscribe-widget"
        >
        <div className="widget-inner-wrap">
          <span
            className="tie-icon-envelope newsletter-icon"
            aria-hidden="true"
          />
          <div className="subscribe-widget-content">
            <h4>With Product You Purchase</h4>
            <h3>
              Subscribe to our mailing list to get the new
              updates!
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div id="mc_embed_signup-tie-newsletter-2">
            <form
              action="#"
              method="post"
              id="mc-embedded-subscribe-form-tie-newsletter-2"
              name="mc-embedded-subscribe-form"
              className="subscribe-form validate"
              target="_blank"
              noValidate=""
            >
              <div className="mc-field-group">
                <label
                  className="screen-reader-text"
                  htmlFor="mce-EMAIL-tie-newsletter-2"
                >
                  Entrez votre adresse Email
                </label>
                <input
                  type="email"
                  defaultValue=""
                  id="mce-EMAIL-tie-newsletter-2"
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
        </div> );
}
 
export default WidgetNewsletter;

