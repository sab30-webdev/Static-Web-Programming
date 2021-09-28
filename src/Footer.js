const Footer = () => {
  return (
    <section className="main-6">
      <div className="main-6-left center">
        <h4>CONTACT US</h4>
        <p>WORKING HOURS</p>
        <p>MON-FRI : 9:00AM TO 5AM IST</p>
      </div>
      <div className="main-6-right">
        <div className="social-div center">
          <img
            src="https://img.icons8.com/ios/50/000000/facebook-new.png"
            alt="logo"
          />
          <img
            src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
            alt="logo"
          />
          <img
            src="https://img.icons8.com/ios/50/000000/linkedin.png"
            alt="logo"
          />
          <img
            src="https://img.icons8.com/ios/50/000000/twitter.png"
            alt="logo"
          />
          <img
            src="https://img.icons8.com/ios/50/000000/youtube-play.png"
            alt="logo"
          />
        </div>
        <div className="links-container center">
          <div>
            <h3>Quick Links</h3>
            <p>IFLUIDS</p>
            <p>SERVICES</p>
            <p>INDUSTRIES</p>
            <p>VALUES</p>
          </div>
          <div>
            <h3>Company</h3>
            <p> ABOUT</p>
            <p>PROJECTS</p>
            <p>TRAINING</p>
            <p>CAREER</p>
          </div>
          <div>
            <p>Subscribe to receive our daily updates/projects</p>
            <input
              type="text"
              placeholder="ENTER EMAIL ID"
              className="email-input"
            />
            <div className="button">SUBSCRIBE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
