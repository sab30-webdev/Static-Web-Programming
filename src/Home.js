import { Carousel } from "react-bootstrap";

const Home = ({ signOut }) => {
  return (
    <div className="home-div">
      <section className="main main-img">
        <div className="main-text">
          <h1>We Build Engineering Practices</h1>
          <h2>of the future</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <div className="button">PROJECTS</div>
          <div className="brand-icon-div">
            <p>We serve global leaders</p>
            <div className="icon-box">
              <img
                src="https://iocl.com/images/static/indianoil_logo.jpg"
                alt="logo"
              ></img>
              <img
                src="https://www.logo.wine/a/logo/Bharat_Petroleum/Bharat_Petroleum-Logo.wine.svg"
                alt="logo"
              ></img>
              <img
                src="https://i2.wp.com/zeevector.com/wp-content/uploads/2021/02/Hindustan-Petroleum-Logo-PNG.png?resize=600%2C745&ssl=1"
                alt="logo"
              ></img>
              <img
                src="https://uxdt.nic.in/wp-content/uploads/2020/06/Gail.png"
                alt="logo"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className="main-2">
        <div className="main-2-text">
          <h4>MISSION</h4>
          <h2>We beleive in purpose</h2>
          <p className="mt-3 w-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
            sed ullamcorper morbi tincidunt.
          </p>
          <div className="button">ABOUT US</div>
        </div>
      </section>
      <section className="main-3">
        <div className="left-div">
          <div className="center">Oil & Gas</div>
          <div className="center">Petrochemical</div>
          <div className="center">Energy</div>
          <div className="center">Fertilizer</div>
          <div className="center">Metals & Minerals</div>
          <div className="center">Others</div>
        </div>
        <div className="right-div right-div-img">
          <div className="right-div-text">
            <h2>Metals & Minerals</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
              sed ullamcorper morbi tincidunt.
            </p>
            <div className="button">READ MORE</div>
          </div>
        </div>
      </section>
      <section className="main-4 center">
        <div className="main-4-container">
          <h2 className="text-center">Why Us</h2>
          <div className="box-parent mt-4">
            <div className="box-child">
              <div className="box"></div>
              <p className="text-center mt-2">A Global Network</p>
            </div>
            <div className="box-child">
              <div className="box"></div>
              <p className="text-center mt-2">Commitment</p>
            </div>
            <div className="box-child">
              <div className="box"></div>
              <p className="text-center mt-2">Trusted Partnership</p>
            </div>
          </div>
        </div>
      </section>
      <section className="main-5">
        <div className="ms-3 mt-4">
          <p>People talk us in</p>
          <h2>News and Media</h2>
        </div>
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>PROJECT 1</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>PROJECT 2</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>PROJECT 3</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
};

export default Home;
