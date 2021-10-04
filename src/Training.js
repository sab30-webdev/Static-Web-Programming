import { useState } from "react";
import Cards from "./Cards/Cards";

const Training = ({ user }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <section className="landing-training">
        <div className="main-text">
          <h1>TRAINING</h1>
          <p>
            Maecenas pharetra convallis posuere morbi leo urna. Purus viverra
            accumsan in nisl nisi. Aliquet nec ullamcorper sit amet. Nibh cras
            pulvinar mattis nunc sed blandit libero.
          </p>
          <div className="button">PRE REGISTER</div>
          <div className="brand-icon-div search-box">
            <div className="search-div">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
                className="search-img"
                alt="search-img"
              />
              <input
                className="search float-start"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="center down-arrow">
              <p>Industry</p>
              <img
                src="https://img.icons8.com/ios-glyphs/50/000000/chevron-down.png"
                alt="img"
              />
            </div>
            <div className="center down-arrow">
              <p>Status</p>
              <img
                src="https://img.icons8.com/ios-glyphs/50/000000/chevron-down.png"
                alt="img"
              />
            </div>
            <div className="center down-arrow">
              <p>Date</p>
              <img
                src="https://img.icons8.com/ios-glyphs/50/000000/chevron-down.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>
      <Cards user={user} search={search} />
      <section className="main-9 center">
        <div className="main-9-container">
          <h2 className="text-center">Our Added Value</h2>
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
      <section className="main-8">
        <div className="verify-text">
          <h2>Verify</h2>
          <p>
            Verify yours and your friend certification status and get validated
            before you hire and apply
          </p>
        </div>
        <div className="verify">
          {" "}
          <input
            type="text"
            placeholder="ENTER EMAIL ID"
            className="email-input"
          />
          <div className="button">SUBSCRIBE</div>
        </div>
      </section>
    </>
  );
};

export default Training;
